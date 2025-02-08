import { Injectable, Logger } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';

@Injectable()
export class CombinationsService {
  protected readonly LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  protected readonly logger = new Logger(CombinationsService.name);
  constructor() {}

  createCombinations(dto: CreateCombinationsDto) {
    this.logger.log(`Creating combinations ${JSON.stringify(dto)}`);
    const designations = this.getDesignations(dto.input);
    const combinations = this.generateCombinations(designations, dto.length);
    this.logger.log(combinations);
  }

  getDesignations(input: number[]) {
    return input.flatMap((occurrences, index) => {
      const result: string[] = [];
      const letter = this.LETTERS[index];
      for (let i = 0; i < occurrences; i++) {
        result.push(`${letter}${i}`);
      }
      return result;
    });
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
