import { IsBoolean, IsOptional, IsString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export const FORM_TYPES = [
  'masonBarBender',
  'architectEngineer',
  'commercial',
  'individual',
  'dealer',
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
  reporting_manager_name?: string;

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

  // Dealer-only fields
  @IsOptional()
  @IsString()
  dealershipName?: string;

  @IsOptional()
  @IsString()
  contactPerson?: string;

  @IsOptional()
  @IsString()
  gstNumber?: string;

  @IsOptional()
  @IsString()
  panNumber?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  ownerSameAsAbove?: boolean;

  @IsOptional()
  @IsString()
  ownerTitle?: string;

  @IsOptional()
  @IsString()
  ownerFirstName?: string;

  @IsOptional()
  @IsString()
  ownerLastName?: string;

  @IsOptional()
  @IsString()
  ownerOfficeAddressLine1?: string;

  @IsOptional()
  @IsString()
  ownerOfficeAddressLine2?: string;

  @IsOptional()
  @IsString()
  ownerCity?: string;

  @IsOptional()
  @IsString()
  ownerState?: string;

  @IsOptional()
  @IsString()
  ownerPostalCode?: string;

  @IsOptional()
  @IsString()
  ownerPlace?: string;

  @IsOptional()
  @IsString()
  ownerPhoneNumber?: string;

  @IsOptional()
  @IsString()
  ownerEmailId?: string;

  @IsOptional()
  @IsString()
  secondContactTitle?: string;

  @IsOptional()
  @IsString()
  secondContactFirstName?: string;

  @IsOptional()
  @IsString()
  secondContactLastName?: string;

  @IsOptional()
  @IsString()
  secondContactPhone?: string;

  @IsOptional()
  @IsString()
  secondContactEmail?: string;

  @IsOptional()
  @IsString()
  spouseName?: string;

  @IsOptional()
  @IsString()
  spouseDob?: string;

  @IsOptional()
  @IsString()
  weddingDay?: string;

  @IsOptional()
  @IsString()
  childName1?: string;

  @IsOptional()
  @IsString()
  childDob1?: string;

  @IsOptional()
  @IsString()
  childName2?: string;

  @IsOptional()
  @IsString()
  childDob2?: string;

  @IsOptional()
  @IsString()
  childName3?: string;

  @IsOptional()
  @IsString()
  childDob3?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  godownSameAsCompany?: boolean;

  @IsOptional()
  @IsString()
  godownAddressLine1?: string;

  @IsOptional()
  @IsString()
  godownAddressLine2?: string;

  @IsOptional()
  @IsString()
  godownCity?: string;

  @IsOptional()
  @IsString()
  godownState?: string;

  @IsOptional()
  @IsString()
  godownPostalCode?: string;

  @IsOptional()
  @IsString()
  godownContactPerson?: string;

  @IsOptional()
  @IsString()
  godownContactMobile?: string;

  @IsOptional()
  @IsString()
  referenceName1?: string;

  @IsOptional()
  @IsString()
  referencePhone1?: string;

  @IsOptional()
  @IsString()
  referenceDetails1?: string;

  @IsOptional()
  @IsString()
  referenceName2?: string;

  @IsOptional()
  @IsString()
  referencePhone2?: string;

  @IsOptional()
  @IsString()
  referenceDetails2?: string;

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

  // Common form-input fields
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  age?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  sameAsAbove?: boolean;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  validationCode?: string;
}
