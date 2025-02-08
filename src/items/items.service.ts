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
      await Promise.all(
        items.map((i) =>
          trx.raw(
            `INSERT INTO ${this.ITEMS_TABLE_NAME} (designation) VALUES(?)`,
            [i],
          ),
        ),
      );

      await trx.commit();
      this.logger.log('Items saved successfully');
    } catch (err) {
      this.logger.error(err);
    }
  }
}
