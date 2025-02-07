import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleConfig, KnexModuleConfig } from './common/config';
import { KnexModule } from 'nest-knexjs';

@Module({
  providers: [],
  controllers: [],
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    KnexModule.forRootAsync(KnexModuleConfig),
  ],
})
export class AppModule {}
