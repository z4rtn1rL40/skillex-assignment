import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleConfig, KnexModuleConfig } from './common/config';
import { KnexModule } from 'nest-knexjs';
import { CombinationsController } from './combinations/combinations.controller';
import { CombinationsService } from './combinations/combinations.service';
import { CombinationsModule } from './combinations/combinations.module';

@Module({
  providers: [CombinationsService],
  controllers: [CombinationsController],
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    KnexModule.forRootAsync(KnexModuleConfig),
    CombinationsModule,
  ],
})
export class AppModule {}
