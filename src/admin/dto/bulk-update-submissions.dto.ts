import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  Max,
  ValidateNested,
} from 'class-validator';
import { UpdateSubmissionDto } from './update-submission.dto';

export class BulkUpdateSubmissionsDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(5000)
  @IsString({ each: true })
  ids!: string[];

  @IsOptional()
  @Type(() => UpdateSubmissionDto)
  @ValidateNested()
  data?: UpdateSubmissionDto;

  /**
   * Safety valve: if provided, limits number of ids processed.
   * Lets the UI send very large selections while controlling backend work.
   */
  @IsOptional()
  @Type(() => Number)
  @Max(5000)
  limit?: number;
}

