import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { BatchCreateItemsDto } from './dto';

@Injectable()
export class ItemsService {
  protected readonly ITEMS_TABLE_NAME = 'items';
  protected readonly logger = new Logger(ItemsService.name);
  constructor(@InjectModel() private knex: Knex) {}

  async batchCreateItems({ items }: BatchCreateItemsDto) {
    this.logger.log(`Creating items ${JSON.stringify(items)}`);
    const trx = await this.knex.transaction();
    try {
      for (const item of items) {
        await trx.raw(
          `INSERT IGNORE INTO ${this.ITEMS_TABLE_NAME} (designation) VALUES('${item}')`,
        );
      }

      await trx.commit();
      this.logger.log('Items saved successfully');
    } catch (err) {
      this.logger.error(err);
    }
  }
}
