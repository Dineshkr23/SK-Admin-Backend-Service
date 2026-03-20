import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class UpdateGlobalPriceDto {
  @Type(() => Number)
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price!: number;
}
