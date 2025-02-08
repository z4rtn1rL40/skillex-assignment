/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';
import { ItemsService } from 'src/items/items.service';
import { Combination } from 'src/common/entities';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CombinationsService {
  protected readonly COMBINATIONS_TABLE_NAME: string = 'combinations';
  protected readonly LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  protected readonly logger = new Logger(CombinationsService.name);

  constructor(
    @InjectModel() private knex: Knex,
    private itemsService: ItemsService,
  ) {}

  async createCombinations(dto: CreateCombinationsDto): Promise<Combination> {
    this.logger.log(`Creating combinations ${JSON.stringify(dto)}`);
    const designations = await this.createDesignations(dto.input);
    const combinations = this.generateCombinations(designations, dto.length);
    return this.createCombination(combinations);
  }

  async findCombinationByCombinationJSONString(jsonString: string) {
    const [[existingCombination]] = await this.knex.raw(
      `
        SELECT id, combinations as combinations from ${this.COMBINATIONS_TABLE_NAME} WHERE combinations = ?
      `,
      [jsonString],
    );

    return existingCombination as Combination;
  }

  async findCombinationById(id: string) {
    this.logger.log(`Getting combination by id ${id}`);
    const [[queryResult]] = await this.knex.raw(
      `SELECT * FROM ${this.COMBINATIONS_TABLE_NAME} WHERE id='${id}'`,
    );

    return queryResult as Combination;
  }

  private async createCombination(
    combination: string[][],
  ): Promise<Combination> {
    const combinationString = JSON.stringify(combination);
    try {
      const trx = await this.knex.transaction();
      const id = uuid();
      await trx.raw(
        ` INSERT INTO combinations (id, combinations)
          VALUES (?, ?);
        `,
        [id, combinationString],
      );

      await trx.commit();
      return this.findCombinationById(id);
    } catch (err) {
      this.logger.error(err);
      throw new ConflictException('Failed to create combinations');
    }
  }

  async createDesignations(input: number[]): Promise<string[]> {
    const designations = input.flatMap((occurrences, index) => {
      const result: string[] = [];
      const letter = this.LETTERS[index];
      for (let i = 0; i < occurrences; i++) {
        result.push(`${letter}${i}`);
      }
      return result;
    });

    await this.itemsService.batchCreateItems({ items: designations });
    return designations;
  }

  generateCombinations(items: string[], length: number) {
    const result: string[][] = [];
    const backtrack = (path: string[], used: Set<number>) => {
      if (path.length === length) {
        result.push([...path]);
        return;
      }

      for (let i = 0; i < items.length; i++) {
        const isDesignationUsed = used.has(i);
        if (isDesignationUsed) {
          continue;
        }

        const previosDesignation = path[path.length - 1]?.[0];
        const currentDesignation = items[i];
        if (
          path.length > 0 &&
          previosDesignation[0] === currentDesignation[0]
        ) {
          continue;
        }

        used.add(i);
        path.push(items[i]);
        backtrack(path, used);
        path.pop();
        used.delete(i);
      }
    };

    backtrack([], new Set());
    return result;
  }
}
