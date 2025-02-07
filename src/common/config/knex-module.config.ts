import { ConfigModule, ConfigService } from '@nestjs/config';

export const KnexModuleConfig = {
  import: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    config: {
      client: 'mysql',
      version: '5.7',
      useNullAsDefault: true,
      connection: {
        database: configService.get<string>('DB_NAME'),
        user: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<number>('DB_PORT')),
        ssl: false,
      },
    },
  }),
};
