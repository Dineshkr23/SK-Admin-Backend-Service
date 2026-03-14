import { IsBoolean, IsOptional, IsString, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSubmissionDto {
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
  @IsString()
  enteredBy?: string;

  @IsOptional()
  @IsString()
  enteredDate?: string;

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
  @ValidateIf((_, v) => v != null)
  @IsString()
  photoProofPath?: string | null;

  @IsOptional()
  @ValidateIf((_, v) => v != null)
  @IsString()
  idProofPath?: string | null;

  @IsOptional()
  @ValidateIf((_, v) => v != null)
  @IsString()
  idProofBackPath?: string | null;
}
