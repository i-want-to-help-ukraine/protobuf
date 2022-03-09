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

/** Volunteer */
export interface VolunteerDto {
  id: string;
  name: string;
  verificationState: string;
}

export interface CreateVolunteerDto {
  name: string;
  citiesIds: string[];
  activitiesIds: string[];
  social: CreateVolunteerSocialDto[];
  paymentOptions: CreateVolunteerPaymentOptionDto[];
}

export interface CreateVolunteerSocialDto {
  url: string;
  socialProviderId: string;
}

export interface CreateVolunteerPaymentOptionDto {
  metadata?: { [key: string]: any };
  paymentOptionId: string;
}

export interface VolunteersResponseDto {
  volunteers: VolunteerDto[];
}

export interface VolunteerResponseDto {
  volunteer?: VolunteerDto;
}

export interface VolunteerIdsRequestDto {
  volunteerId: string[];
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

/** VolunteerSocial */
export interface VolunteerSocialDto {
  id: string;
  url: string;
  volunteerId: string;
}

export interface VolunteerSocialResponseDto {
  volunteerSocial: VolunteerSocialDto[];
}

/** VolunteerPaymentOption */
export interface VolunteerPaymentOptionDto {
  id: string;
  metadata?: { [key: string]: any };
  volunteerId: string;
}

export interface VolunteerPaymentOptionResponseDto {
  paymentOptions: VolunteerPaymentOptionDto[];
}

export interface CreatePaymentOptionDto {}

export interface UpdatePaymentOptionDto {}

export interface DeletePaymentOptionDto {}

/** search */
export interface SearchVolunteersDto {
  cityIds: string[];
  activityIds: string[];
  paymentOptionIds: string[];
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  search(request: SearchVolunteersDto): Observable<VolunteersResponseDto>;

  getCities(request: Empty): Observable<CitiesDto>;

  getActivities(request: Empty): Observable<ActivitiesDto>;

  getSocialProviders(request: Empty): Observable<SocialProvidersDto>;

  getPaymentProviders(request: Empty): Observable<PaymentProvidersDto>;

  getVolunteerCities(request: VolunteerIdsRequestDto): Observable<CitiesDto>;

  getVolunteerActivities(
    request: VolunteerIdsRequestDto
  ): Observable<ActivitiesDto>;

  getVolunteerSocial(
    request: VolunteerIdsRequestDto
  ): Observable<VolunteerSocialResponseDto>;

  getVolunteerPaymentOptions(
    request: VolunteerIdsRequestDto
  ): Observable<VolunteerPaymentOptionResponseDto>;

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
    request: Empty
  ): Promise<CitiesDto> | Observable<CitiesDto> | CitiesDto;

  getActivities(
    request: Empty
  ): Promise<ActivitiesDto> | Observable<ActivitiesDto> | ActivitiesDto;

  getSocialProviders(
    request: Empty
  ):
    | Promise<SocialProvidersDto>
    | Observable<SocialProvidersDto>
    | SocialProvidersDto;

  getPaymentProviders(
    request: Empty
  ):
    | Promise<PaymentProvidersDto>
    | Observable<PaymentProvidersDto>
    | PaymentProvidersDto;

  getVolunteerCities(
    request: VolunteerIdsRequestDto
  ): Promise<CitiesDto> | Observable<CitiesDto> | CitiesDto;

  getVolunteerActivities(
    request: VolunteerIdsRequestDto
  ): Promise<ActivitiesDto> | Observable<ActivitiesDto> | ActivitiesDto;

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
      "getVolunteerCities",
      "getVolunteerActivities",
      "getVolunteerSocial",
      "getVolunteerPaymentOptions",
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
