import { Logger } from '@nestjs/common';
import { Knex } from 'knex';
export declare class ResponsesService {
    private knex;
    protected readonly RESPONSES_TABLE_NAME = "responses";
    protected readonly logger: Logger;
    constructor(knex: Knex);
    createResponse(response: unknown): Promise<void>;
}
