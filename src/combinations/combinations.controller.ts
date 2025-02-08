import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateCombinationsDto } from './dto';
import { CombinationsService } from './combinations.service';
import { ResponsesInterceptor } from 'src/common/interceptors';

@Controller('combinations')
export class CombinationsController {
  constructor(private combinations: CombinationsService) {}

  @Post()
  @UseInterceptors(ResponsesInterceptor)
  async createCombinations(@Body() dto: CreateCombinationsDto) {
    return this.combinations.createCombinations(dto);
  }
}
