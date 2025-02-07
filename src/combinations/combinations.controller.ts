import { Body, Controller, Post } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';

@Controller('combinations')
export class CombinationsController {
  constructor() {}

  @Post()
  createCombinations(@Body() dto: CreateCombinationsDto) {
    return dto;
  }
}
