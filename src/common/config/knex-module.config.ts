import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModuleOptions } from 'nest-knexjs';

export const KnexModuleConfig = {
  import: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): KnexModuleOptions => ({
    config: {
      client: 'mysql2',
      version: '5.7',
      useNullAsDefault: true,
      connection: {
        database: configService.get<string>('DB_NAME'),
        user: configService.get<string>('DB_CLIENT_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<number>('DB_PORT')),
        ssl: false,
      },
    },
  }),
};
