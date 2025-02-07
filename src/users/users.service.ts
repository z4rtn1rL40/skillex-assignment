import { Injectable, Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { User } from 'src/common/models';

@Injectable()
export class UsersService {
  protected readonly logger = new Logger(UsersService.name);
  protected readonly tableName = 'users';
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findUsers() {
    this.logger.log('Getting all users');
    return this.knex.table('users');
  }

  async createUser({ name }: { name: string }) {
    this.logger.log(`Creating a user ${name}`);
    await this.knex(this.tableName).insert({ name });

    const [user] = (await this.knex(this.tableName)
      .select('*')
      .orderBy('udpatedAt', 'desc')
      .limit(1)) as User[];

    this.logger.log(`User ${JSON.stringify(user)}`);
    return user;
  }
}
