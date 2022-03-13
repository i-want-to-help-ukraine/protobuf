/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "VolunteerServicePackage";

/** Shared */
export interface GetByIdsDto {
  ids: string[];
}

export interface GetByAuthId {
  authId: string;
}

/** Volunteer */
export interface VolunteerDto {
  id: string;
  authId: string;
  firstName: string;
  lastName: string;
  description: string;
  organization: string;
  verificationStatus: string;
  cityIds: string[];
  activityIds: string[];
}

export interface CreateProfileDto {
  authId: string;
  firstName: string;
  lastName: string;
  description: string;
  organization: string;
  cityIds: string[];
  activityIds: string[];
  social: CreateVolunteerSocialDto[];
  paymentOptions: CreateVolunteerPaymentOptionDto[];
  contacts: CreateVolunteerContactDto[];
}

export interface UpdateProfileDto {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  organization: string;
  cityIds: string[];
  activityIds: string[];
  social?: UpdateOrCreateVolunteerSocialDto;
  paymentOptions?: UpdateOrCreateVolunteerPaymentOptionDto;
  contacts?: UpdateOrCreateVolunteerContactDto;
}

export interface UpdateOrCreateVolunteerSocialDto {
  create: CreateVolunteerSocialDto[];
  update: UpdateVolunteerSocialDto[];
}

export interface CreateVolunteerSocialDto {
  url: string;
  socialProviderId: string;
}

export interface UpdateVolunteerSocialDto {
  id: string;
  url: string;
}

export interface UpdateOrCreateVolunteerPaymentOptionDto {
  create: CreateVolunteerPaymentOptionDto[];
  update: UpdateVolunteerPaymentOptionDto[];
}

export interface CreateVolunteerPaymentOptionDto {
  metadata: string;
  paymentOptionId: string;
}

export interface UpdateVolunteerPaymentOptionDto {
  id: string;
  metadata: string;
}

export interface UpdateOrCreateVolunteerContactDto {
  create: CreateVolunteerContactDto[];
  update: UpdateVolunteerContactDto[];
}

export interface CreateVolunteerContactDto {
  metadata: string;
  contactProviderId: string;
}

export interface UpdateVolunteerContactDto {
  id: string;
  metadata: string;
}

export interface HideProfileDto {
  id: string;
}

export interface VolunteersResponseDto {
  volunteers: VolunteerDto[];
}

export interface VolunteerAuthProfileDto {
  volunteer?: VolunteerDto;
}

export interface ContactsResponseDto {
  contacts: VolunteerContactDto[];
}

export interface VolunteerResponseDto {
  volunteer?: VolunteerDto;
}

export interface VolunteerIdsRequestDto {
  volunteerIds: string[];
}

/** Activity */
export interface ActivityDto {
  id: string;
  title: string;
  volunteers?: VolunteerDto;
}

export interface ActivitiesDto {
  activities: ActivityDto[];
}

/** City */
export interface CityDto {
  id: string;
  title: string;
  volunteers?: VolunteerDto;
}

export interface CitiesDto {
  cities: CityDto[];
}

/** PaymentProvider */
export interface PaymentProviderDto {
  id: string;
  title: string;
}

export interface PaymentProvidersDto {
  paymentProvider: PaymentProviderDto[];
}

/** SocialProvider */
export interface SocialProviderDto {
  id: string;
  title: string;
}

export interface SocialProvidersDto {
  socialProviders: SocialProviderDto[];
}

/** ContactProvider */
export interface ContactProviderDto {
  id: string;
  title: string;
}

export interface ContactProvidersDto {
  contactProviders: ContactProviderDto[];
}

/** VolunteerSocial */
export interface VolunteerSocialDto {
  id: string;
  url: string;
  volunteerId: string;
  providerId: string;
}

export interface VolunteerSocialResponseDto {
  volunteerSocial: VolunteerSocialDto[];
}

/** VolunteerPaymentOption */
export interface VolunteerPaymentOptionDto {
  id: string;
  metadata: string;
  volunteerId: string;
  providerId: string;
}

export interface VolunteerPaymentOptionResponseDto {
  paymentOptions: VolunteerPaymentOptionDto[];
}

/** VolunteerContact */
export interface VolunteerContactDto {
  id: string;
  metadata: string;
  volunteerId: string;
  providerId: string;
}

/** search */
export interface SearchVolunteersDto {
  cityIds: string[];
  activityIds: string[];
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  search(request: SearchVolunteersDto): Observable<VolunteersResponseDto>;

  getCities(request: GetByIdsDto): Observable<CitiesDto>;

  getActivities(request: GetByIdsDto): Observable<ActivitiesDto>;

  getSocialProviders(request: GetByIdsDto): Observable<SocialProvidersDto>;

  getPaymentProviders(request: GetByIdsDto): Observable<PaymentProvidersDto>;

  getContactProviders(request: GetByIdsDto): Observable<ContactProvidersDto>;

  getVolunteerSocial(
    request: VolunteerIdsRequestDto
  ): Observable<VolunteerSocialResponseDto>;

  getVolunteerPaymentOptions(
    request: VolunteerIdsRequestDto
  ): Observable<VolunteerPaymentOptionResponseDto>;

  getVolunteerContacts(
    request: VolunteerIdsRequestDto
  ): Observable<ContactsResponseDto>;

  getVolunteersByIds(request: GetByIdsDto): Observable<VolunteersResponseDto>;

  getVolunteerAuthProfile(
    request: GetByAuthId
  ): Observable<VolunteerAuthProfileDto>;

  createProfile(request: CreateProfileDto): Observable<VolunteerResponseDto>;

  updateProfile(request: UpdateProfileDto): Observable<VolunteerResponseDto>;

  hideProfile(request: HideProfileDto): Observable<Empty>;
}

export interface VolunteerServiceRPCController {
  search(
    request: SearchVolunteersDto
  ):
    | Promise<VolunteersResponseDto>
    | Observable<VolunteersResponseDto>
    | VolunteersResponseDto;

  getCities(
    request: GetByIdsDto
  ): Promise<CitiesDto> | Observable<CitiesDto> | CitiesDto;

  getActivities(
    request: GetByIdsDto
  ): Promise<ActivitiesDto> | Observable<ActivitiesDto> | ActivitiesDto;

  getSocialProviders(
    request: GetByIdsDto
  ):
    | Promise<SocialProvidersDto>
    | Observable<SocialProvidersDto>
    | SocialProvidersDto;

  getPaymentProviders(
    request: GetByIdsDto
  ):
    | Promise<PaymentProvidersDto>
    | Observable<PaymentProvidersDto>
    | PaymentProvidersDto;

  getContactProviders(
    request: GetByIdsDto
  ):
    | Promise<ContactProvidersDto>
    | Observable<ContactProvidersDto>
    | ContactProvidersDto;

  getVolunteerSocial(
    request: VolunteerIdsRequestDto
  ):
    | Promise<VolunteerSocialResponseDto>
    | Observable<VolunteerSocialResponseDto>
    | VolunteerSocialResponseDto;

  getVolunteerPaymentOptions(
    request: VolunteerIdsRequestDto
  ):
    | Promise<VolunteerPaymentOptionResponseDto>
    | Observable<VolunteerPaymentOptionResponseDto>
    | VolunteerPaymentOptionResponseDto;

  getVolunteerContacts(
    request: VolunteerIdsRequestDto
  ):
    | Promise<ContactsResponseDto>
    | Observable<ContactsResponseDto>
    | ContactsResponseDto;

  getVolunteersByIds(
    request: GetByIdsDto
  ):
    | Promise<VolunteersResponseDto>
    | Observable<VolunteersResponseDto>
    | VolunteersResponseDto;

  getVolunteerAuthProfile(
    request: GetByAuthId
  ):
    | Promise<VolunteerAuthProfileDto>
    | Observable<VolunteerAuthProfileDto>
    | VolunteerAuthProfileDto;

  createProfile(
    request: CreateProfileDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;

  updateProfile(
    request: UpdateProfileDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;

  hideProfile(request: HideProfileDto): void;
}

export function VolunteerServiceRPCControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "search",
      "getCities",
      "getActivities",
      "getSocialProviders",
      "getPaymentProviders",
      "getContactProviders",
      "getVolunteerSocial",
      "getVolunteerPaymentOptions",
      "getVolunteerContacts",
      "getVolunteersByIds",
      "getVolunteerAuthProfile",
      "createProfile",
      "updateProfile",
      "hideProfile",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("VolunteerServiceRPC", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("VolunteerServiceRPC", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const VOLUNTEER_SERVICE_RP_C_SERVICE_NAME = "VolunteerServiceRPC";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
