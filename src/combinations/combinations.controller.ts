import { Body, Controller, Post } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';
import { CombinationsService } from './combinations.service';

@Controller('combinations')
export class CombinationsController {
  constructor(private combinations: CombinationsService) {}

  @Post()
  createCombinations(@Body() dto: CreateCombinationsDto) {
    return this.combinations.createCombinations(dto);
  }
}
