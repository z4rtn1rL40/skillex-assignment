import { Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { BatchCreateItemsDto } from './dto';
export declare class ItemsService {
    private knex;
    protected readonly ITEMS_TABLE_NAME = "items";
    protected readonly logger: Logger;
    constructor(knex: Knex);
    batchCreateItems({ items }: BatchCreateItemsDto): Promise<void>;
}
