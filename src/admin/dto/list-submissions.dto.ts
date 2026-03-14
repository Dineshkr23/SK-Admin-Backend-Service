import { IsOptional, IsString, IsBoolean, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ListSubmissionsQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  professionTypes?: string; // comma-separated

  @IsOptional()
  @Type(() => Boolean)
  isContacted?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  isApproved?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  isDeleted?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  isActive?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  isPending?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  isRejected?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;
}
