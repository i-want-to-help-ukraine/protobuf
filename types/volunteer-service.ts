/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

export const protobufPackage = "VolunteerServicePackage";

export enum PaymentOptionType {
  bankCard = "bankCard",
  bitcoin = "bitcoin",
  westernUnion = "westernUnion",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum VerificationState {
  requested = "requested",
  inProgress = "inProgress",
  verified = "verified",
  rejected = "rejected",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum SocialProvider {
  instagram = "instagram",
  google = "google",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export interface GetByIdsRequest {
  ids: string[];
}

export interface SearchVolunteersRequest {
  city: string;
  activityType: string[];
  PaymentOptions: string[];
}

export interface VolunteerDto {
  id: string;
  name: string;
  activityIds: string[];
  paymentOptionIds: string[];
}

export interface VolunteersResponse {
  volunteers: VolunteerDto[];
}

export interface VolunteerResponse {
  volunteer?: VolunteerDto;
}

export interface VolunteerActivity {
  id: string;
  title: string;
}

export interface GetActivitiesByIdsRequest {
  ids: string[];
}

export interface PaymentOption {
  id: string;
  type: PaymentOptionType;
  values: PaymentOptionValue[];
}

export interface PaymentOptionValue {
  id: string;
  key: string;
  value: string;
}

export interface AddPaymentOptionRequest {
  type: PaymentOptionType;
  values: PaymentOptionValue[];
  volunteerId: string;
}

export interface UpdatePaymentOptionRequest {
  id: string;
  type: PaymentOptionType;
  values: PaymentOptionValue[];
  volunteerId: string;
}

export interface DeletePaymentOptionRequest {
  id: string;
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  search(request: SearchVolunteersRequest): Observable<VolunteersResponse>;

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

  getActivitiesByIds(
    request: GetActivitiesByIdsRequest
  ): Observable<VolunteerResponse>;

  getPaymentOptionsByIds(
    request: GetByIdsRequest
  ): Observable<VolunteerResponse>;
}

export interface VolunteerServiceRPCController {
  search(
    request: SearchVolunteersRequest
  ):
    | Promise<VolunteersResponse>
    | Observable<VolunteersResponse>
    | VolunteersResponse;

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

  getActivitiesByIds(
    request: GetActivitiesByIdsRequest
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;

  getPaymentOptionsByIds(
    request: GetByIdsRequest
  ):
    | Promise<VolunteerResponse>
    | Observable<VolunteerResponse>
    | VolunteerResponse;
}

export function VolunteerServiceRPCControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "search",
      "getVolunteersByIds",
      "addPaymentOption",
      "updatePaymentOption",
      "deletePaymentOption",
      "getActivitiesByIds",
      "getPaymentOptionsByIds",
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
