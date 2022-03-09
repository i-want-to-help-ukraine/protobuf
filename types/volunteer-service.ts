/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

export const protobufPackage = "VolunteerServicePackage";

/** Shared */
export interface GetByIdsRequest {
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
  social: string[];
  paymentOptions: string[];
}

export interface VolunteersResponse {
  volunteers: VolunteerDto[];
}

export interface VolunteerResponse {
  volunteer?: VolunteerDto;
}

export interface VolunteerIdRequest {
  volunteerId: string;
}

/** Activity */
export interface ActivityDto {
  id: string;
  title: string;
  volunteers?: VolunteerDto;
}

export interface ActivitiesResponse {
  activities: ActivityDto[];
}

/** City */
export interface CityDto {
  id: string;
  title: string;
  volunteers?: VolunteerDto;
}

export interface CitiesResponse {
  cities: CityDto[];
}

/** PaymentProvider */
export interface PaymentProviderDto {
  id: string;
  title: string;
}

export interface PaymentProvidersResponse {
  paymentProvider: PaymentProviderDto[];
}

/** SocialProvider */
export interface SocialProviderDto {
  id: string;
  title: string;
  volunteerSocial?: VolunteerSocialDto;
}

export interface SocialProvidersResponse {
  socialProviders: SocialProviderDto[];
}

/** VolunteerSocial */
export interface VolunteerSocialDto {
  id: string;
  url: string;
  providers?: PaymentProviderDto;
  volunteerId: string;
}

export interface VolunteerSocialResponse {
  volunteerSocial: VolunteerSocialDto[];
}

/** VolunteerPaymentOption */
export interface VolunteerPaymentOptionDto {
  id: string;
  metadata: string;
  paymentProviders?: PaymentProviderDto;
  volunteerId: string;
}

export interface VolunteerPaymentOptionResponse {
  paymentOptions: VolunteerPaymentOptionDto[];
}

export interface AddPaymentOptionRequest {}

export interface UpdatePaymentOptionRequest {}

export interface DeletePaymentOptionRequest {}

/** search */
export interface SearchVolunteersRequest {
  cityIds: string[];
  activityIds: string[];
  paymentOptionIds: string[];
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  search(request: SearchVolunteersRequest): Observable<VolunteersResponse>;

  getCities(request: GetByIdsRequest): Observable<CitiesResponse>;

  getActivities(request: GetByIdsRequest): Observable<ActivitiesResponse>;

  getSocialProviders(
    request: GetByIdsRequest
  ): Observable<SocialProvidersResponse>;

  getPaymentProviders(
    request: GetByIdsRequest
  ): Observable<PaymentProvidersResponse>;

  getVolunteerCities(request: VolunteerIdRequest): Observable<CitiesResponse>;

  getVolunteerActivities(
    request: VolunteerIdRequest
  ): Observable<ActivitiesResponse>;

  getVolunteerSocial(
    request: VolunteerIdRequest
  ): Observable<VolunteerSocialResponse>;

  getVolunteerPaymentOptions(
    request: VolunteerIdRequest
  ): Observable<VolunteerPaymentOptionResponse>;

  getVolunteersByIds(request: GetByIdsRequest): Observable<VolunteersResponse>;

  addPaymentOption(
    request: AddPaymentOptionRequest
  ): Observable<VolunteerResponse>;

  updatePaymentOption(
    request: UpdatePaymentOptionRequest
  ): Observable<VolunteerResponse>;

  deletePaymentOption(
    request: DeletePaymentOptionRequest
  ): Observable<VolunteerResponse>;

  createVolunteer(request: CreateVolunteerDto): Observable<VolunteerResponse>;
}

export interface VolunteerServiceRPCController {
  search(
    request: SearchVolunteersRequest
  ):
    | Promise<VolunteersResponse>
    | Observable<VolunteersResponse>
    | VolunteersResponse;

  getCities(
    request: GetByIdsRequest
  ): Promise<CitiesResponse> | Observable<CitiesResponse> | CitiesResponse;

  getActivities(
    request: GetByIdsRequest
  ):
    | Promise<ActivitiesResponse>
    | Observable<ActivitiesResponse>
    | ActivitiesResponse;

  getSocialProviders(
    request: GetByIdsRequest
  ):
    | Promise<SocialProvidersResponse>
    | Observable<SocialProvidersResponse>
    | SocialProvidersResponse;

  getPaymentProviders(
    request: GetByIdsRequest
  ):
    | Promise<PaymentProvidersResponse>
    | Observable<PaymentProvidersResponse>
    | PaymentProvidersResponse;

  getVolunteerCities(
    request: VolunteerIdRequest
  ): Promise<CitiesResponse> | Observable<CitiesResponse> | CitiesResponse;

  getVolunteerActivities(
    request: VolunteerIdRequest
  ):
    | Promise<ActivitiesResponse>
    | Observable<ActivitiesResponse>
    | ActivitiesResponse;

  getVolunteerSocial(
    request: VolunteerIdRequest
  ):
    | Promise<VolunteerSocialResponse>
    | Observable<VolunteerSocialResponse>
    | VolunteerSocialResponse;

  getVolunteerPaymentOptions(
    request: VolunteerIdRequest
  ):
    | Promise<VolunteerPaymentOptionResponse>
    | Observable<VolunteerPaymentOptionResponse>
    | VolunteerPaymentOptionResponse;

  getVolunteersByIds(
    request: GetByIdsRequest
  ):
    | Promise<VolunteersResponse>
    | Observable<VolunteersResponse>
    | VolunteersResponse;

  addPaymentOption(
    request: AddPaymentOptionRequest
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;

  updatePaymentOption(
    request: UpdatePaymentOptionRequest
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;

  deletePaymentOption(
    request: DeletePaymentOptionRequest
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;

  createVolunteer(
    request: CreateVolunteerDto
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;
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
