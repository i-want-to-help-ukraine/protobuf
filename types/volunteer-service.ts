/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

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
  avatarUrl: string;
  description?: string | undefined;
  organization?: string | undefined;
  verificationStatus: string;
  cityIds: string[];
  activityIds: string[];
  authEmail?: string | undefined;
}

export interface CreateProfileDto {
  authId: string;
  firstName: string;
  lastName: string;
  description?: string | undefined;
  avatarUrl: string;
  organization?: string | undefined;
  cityIds: string[];
  activityIds: string[];
  social: CreateVolunteerSocialDto[];
  paymentOptions: CreateVolunteerPaymentOptionDto[];
  contacts: CreateVolunteerContactDto[];
  authEmail?: string | undefined;
}

export interface UpdateProfileDto {
  authId: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  description?: string | undefined;
  avatarUrl?: string | undefined;
  organization?: string | undefined;
  cityIds: string[];
  activityIds: string[];
  social?: CreateOrDeleteVolunteerSocialDto;
  paymentOptions?: CreateOrDeleteVolunteerPaymentOptionDto;
  contacts?: CreateOrDeleteVolunteerContactDto;
}

export interface CreateOrDeleteVolunteerSocialDto {
  create: CreateVolunteerSocialDto[];
  delete: string[];
}

export interface CreateVolunteerSocialDto {
  url: string;
  socialProviderId: string;
}

export interface CreateOrDeleteVolunteerPaymentOptionDto {
  create: CreateVolunteerPaymentOptionDto[];
  delete: string[];
}

export interface CreateVolunteerPaymentOptionDto {
  metadata: string;
  paymentProviderId: string;
}

export interface CreateOrDeleteVolunteerContactDto {
  create: CreateVolunteerContactDto[];
  delete: string[];
}

export interface CreateVolunteerContactDto {
  metadata: string;
  contactProviderId: string;
}

export interface HideProfileDto {
  authId: string;
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
  description: string;
  volunteers?: VolunteerDto;
}

export interface ActivitiesDto {
  activities: ActivityDto[];
}

/** City */
export interface CityDto {
  id: string;
  title: string;
  adminName: string;
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
  offset: number;
  startCursor?: string | undefined;
}

export interface SearchVolunteerResponse {
  totalCount: number;
  startCursor?: string | undefined;
  endCursor?: string | undefined;
  hasNextPage: boolean;
  volunteers: VolunteerDto[];
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  search(request: SearchVolunteersDto): Observable<SearchVolunteerResponse>;

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

  hideProfile(request: HideProfileDto): Observable<VolunteerResponseDto>;
}

export interface VolunteerServiceRPCController {
  search(
    request: SearchVolunteersDto
  ):
    | Promise<SearchVolunteerResponse>
    | Observable<SearchVolunteerResponse>
    | SearchVolunteerResponse;

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

  hideProfile(
    request: HideProfileDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;
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
