import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleConfig, KnexModuleConfig } from './common/config';
import { KnexModule } from 'nest-knexjs';
import { CombinationsController } from './combinations/combinations.controller';
import { CombinationsService } from './combinations/combinations.service';
import { CombinationsModule } from './combinations/combinations.module';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { ResponsesModule } from './responses/responses.module';

@Module({
  providers: [CombinationsService, ItemsService],
  controllers: [CombinationsController],
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    KnexModule.forRootAsync(KnexModuleConfig),
    CombinationsModule,
    ItemsModule,
    ResponsesModule,
  ],
})
export class AppModule {}
