import { Injectable, Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

@Injectable()
export class ResponsesService {
  protected readonly RESPONSES_TABLE_NAME = 'responses';
  protected readonly logger = new Logger(ResponsesService.name);
  constructor(@InjectModel() private knex: Knex) {}

  async createResponse(response: unknown) {
    this.logger.log(`Creating a response`);
    try {
      await this.knex.raw(
        `
        INSERT INTO ${this.RESPONSES_TABLE_NAME} (response) VALUES(?)
      `,
        [JSON.stringify(response)],
      );
    } catch (err) {
      this.logger.error(err);
    }
  }
}
