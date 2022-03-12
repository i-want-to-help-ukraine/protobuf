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

/** Volunteer */
export interface VolunteerDto {
  id: string;
  firstname: string;
  lastname: string;
  verificationStatus: string;
  cityIds: string[];
  activityIds: string[];
}

export interface CreateVolunteerDto {
  firstname: string;
  lastname: string;
  cityIds: string[];
  activityIds: string[];
  social: CreateVolunteerSocialDto[];
  paymentOptions: CreateVolunteerPaymentOptionDto[];
  contacts: CreateVolunteerContactDto[];
}

export interface CreateVolunteerSocialDto {
  url: string;
  socialProviderId: string;
}

export interface CreateVolunteerPaymentOptionDto {
  metadata?: { [key: string]: any };
  paymentOptionId: string;
}

export interface CreateVolunteerContactDto {
  metadata?: { [key: string]: any };
  contactProviderId: string;
}

export interface VolunteersResponseDto {
  volunteers: VolunteerDto[];
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
  metadata?: { [key: string]: any };
  volunteerId: string;
  providerId: string;
}

export interface VolunteerPaymentOptionResponseDto {
  paymentOptions: VolunteerPaymentOptionDto[];
}

export interface CreatePaymentOptionDto {}

export interface UpdatePaymentOptionDto {}

export interface DeletePaymentOptionDto {}

/** VolunteerContact */
export interface VolunteerContactDto {
  id: string;
  metadata?: { [key: string]: any };
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

  addPaymentOption(
    request: CreatePaymentOptionDto
  ): Observable<VolunteerResponseDto>;

  updatePaymentOption(
    request: UpdatePaymentOptionDto
  ): Observable<VolunteerResponseDto>;

  deletePaymentOption(
    request: DeletePaymentOptionDto
  ): Observable<VolunteerResponseDto>;

  createVolunteer(
    request: CreateVolunteerDto
  ): Observable<VolunteerResponseDto>;
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

  addPaymentOption(
    request: CreatePaymentOptionDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;

  updatePaymentOption(
    request: UpdatePaymentOptionDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;

  deletePaymentOption(
    request: DeletePaymentOptionDto
  ):
    | Promise<VolunteerResponseDto>
    | Observable<VolunteerResponseDto>
    | VolunteerResponseDto;

  createVolunteer(
    request: CreateVolunteerDto
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
      "getVolunteerSocial",
      "getVolunteerPaymentOptions",
      "getVolunteerContacts",
      "getVolunteersByIds",
      "addPaymentOption",
      "updatePaymentOption",
      "deletePaymentOption",
      "createVolunteer",
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
