import { Injectable, Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

@Injectable()
export class UsersService {
  protected readonly logger = new Logger(UsersService.name);
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findUsers() {
    this.logger.log('Getting all users');
    return this.knex.table('users');
  }
}
