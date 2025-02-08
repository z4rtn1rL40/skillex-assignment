import { Logger } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';
import { ItemsService } from 'src/items/items.service';
import { Combination } from 'src/common/entities';
import { Knex } from 'knex';
export declare class CombinationsService {
    private knex;
    private itemsService;
    protected readonly COMBINATIONS_TABLE_NAME: string;
    protected readonly LETTERS: string[];
    protected readonly logger: Logger;
    constructor(knex: Knex, itemsService: ItemsService);
    createCombinations(dto: CreateCombinationsDto): Promise<Combination>;
    findCombinationByCombinationJSONString(jsonString: string): Promise<Combination>;
    findCombinationById(id: string): Promise<Combination>;
    private createCombination;
    createDesignations(input: number[]): Promise<string[]>;
    generateCombinations(items: string[], length: number): string[][];
}
