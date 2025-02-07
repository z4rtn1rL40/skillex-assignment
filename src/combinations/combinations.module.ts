import { Module } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { CombinationsController } from './combinations.controller';

@Module({
  providers: [CombinationsService],
  controllers: [CombinationsController],
  exports: [CombinationsService],
})
export class CombinationsModule {}
