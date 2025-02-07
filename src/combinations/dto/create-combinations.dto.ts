import { IsPositive } from 'class-validator';

export class CreateCombinationsDto {
  @IsPositive({ each: true })
  input: number[];

  @IsPositive()
  length: number;
}
