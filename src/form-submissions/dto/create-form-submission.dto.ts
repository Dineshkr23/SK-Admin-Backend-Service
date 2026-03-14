import {
  IsBoolean,
  IsOptional,
  IsString,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

export const FORM_TYPES = [
  'registration',
  'form_b',
  'form_c',
  'form_d',
  'form_e',
] as const;
export type FormType = (typeof FORM_TYPES)[number];

export class CreateFormSubmissionDto {
  @IsEnum(FORM_TYPES)
  formType: FormType;

  @IsOptional()
  @IsString()
  pi_firstName?: string;

  @IsOptional()
  @IsString()
  pi_lastName?: string;

  @IsOptional()
  @IsString()
  pi_profession?: string;

  @IsOptional()
  @IsString()
  pi_dob?: string;

  @IsOptional()
  @IsString()
  pi_phone?: string;

  @IsOptional()
  @IsString()
  pi_whatsAppNumber?: string;

  @IsOptional()
  @IsString()
  pi_emailId?: string;

  @IsOptional()
  @IsString()
  pi_addressLane1?: string;

  @IsOptional()
  @IsString()
  pi_addressLane2?: string;

  @IsOptional()
  @IsString()
  pi_taluk?: string;

  @IsOptional()
  @IsString()
  pi_district?: string;

  @IsOptional()
  @IsString()
  pi_city?: string;

  @IsOptional()
  @IsString()
  pi_state?: string;

  @IsOptional()
  @IsString()
  pi_pincode?: string;

  @IsOptional()
  @IsString()
  pi_landmark?: string;

  @IsOptional()
  @IsString()
  pi_anniversaryDate?: string;

  @IsOptional()
  @IsString()
  ref_nameOfTheperson?: string;

  @IsOptional()
  @IsString()
  ref_place?: string;

  @IsOptional()
  @IsString()
  sod_nameOfTheDealer?: string;

  @IsOptional()
  @IsString()
  sod_place?: string;

  @IsOptional()
  @IsString()
  shop_location?: string;

  @IsOptional()
  @IsString()
  shop_Address1?: string;

  @IsOptional()
  @IsString()
  shop_Address2?: string;

  @IsOptional()
  @IsString()
  shop_District?: string;

  @IsOptional()
  @IsString()
  shop_Taluk?: string;

  @IsOptional()
  @IsString()
  shop_City?: string;

  @IsOptional()
  @IsString()
  shop_Pincode?: string;

  @IsOptional()
  @IsString()
  shop_Landmark?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isContacted?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isApproved?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isDeleted?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isPending?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isRejected?: boolean;
}
