import { Module } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { CombinationsController } from './combinations.controller';
import { ItemsModule } from 'src/items/items.module';
import { ItemsService } from 'src/items/items.service';

@Module({
  imports: [ItemsModule],
  providers: [CombinationsService, ItemsService],
  controllers: [CombinationsController],
  exports: [CombinationsService],
})
export class CombinationsModule {}
