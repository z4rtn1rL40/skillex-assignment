import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CombinationResponseDto {
  @IsString()
  id: string;

  @Transform(({ value }) => JSON.parse(value as string))
  combinations: string[][];
}
