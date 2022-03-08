/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

export const protobufPackage = "VolunteerServicePackage";

export enum DonateOptionType {
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

/** getVolunteersByIds */
export interface VolunteerDto {
  id: string;
  name: string;
  activities: VolunteerActivity[];
  donateOptions: DonateOption[];
}

export interface GetVolunteersByIdsRequest {
  ids: string[];
}

export interface GetVolunteersByIdsResponse {
  volunteers: VolunteerDto[];
}

/** Volunteer activities */
export interface VolunteerActivity {
  id: string;
  title: string;
}

export interface GetVolunteerActivitiesByIdsRequest {
  ids: string[];
}

export interface GetVolunteerActivitiesByIdsResponse {
  volunteerActivities: VolunteerActivity[];
}

/** DonateOption */
export interface DonateOption {
  id: string;
  type: DonateOptionType;
  values: DonateOptionValue[];
}

export interface DonateOptionValue {
  id: string;
  key: string;
  value: string;
}

/** addDonateOption */
export interface AddDonateOptionRequest {
  type: DonateOptionType;
  values: DonateOptionValue[];
  volunteerId: string;
}

export interface AddDonateOptionResponse {
  volunteerDto?: VolunteerDto;
}

/** updateDonateOptions */
export interface UpdateDonateOptionRequest {
  id: string;
  type: DonateOptionType;
  values: DonateOptionValue[];
  volunteerId: string;
}

export interface UpdateDonateOptionResponse {
  volunteerDto?: VolunteerDto;
}

/** updateDonateOptions */
export interface DeleteDonateOptionRequest {
  id: string;
}

export interface DeleteDonateOptionResponse {}

/** searchVolunteers */
export interface SearchVolunteersRequest {
  city: string;
  activityType: string[];
  donateOptions: string[];
}

export interface SearchVolunteersResponse {
  volunteers: VolunteerDto[];
}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  searchVolunteers(
    request: SearchVolunteersRequest
  ): Observable<SearchVolunteersResponse>;

  getVolunteersByIds(
    request: GetVolunteersByIdsRequest
  ): Observable<GetVolunteersByIdsResponse>;

  addDonateOption(
    request: AddDonateOptionRequest
  ): Observable<AddDonateOptionResponse>;

  updateDonateOptions(
    request: UpdateDonateOptionRequest
  ): Observable<UpdateDonateOptionResponse>;

  deleteDonateOption(
    request: DeleteDonateOptionRequest
  ): Observable<DeleteDonateOptionResponse>;

  getVolunteerActivitiesByIds(
    request: GetVolunteerActivitiesByIdsRequest
  ): Observable<GetVolunteerActivitiesByIdsResponse>;
}

export interface VolunteerServiceRPCController {
  searchVolunteers(
    request: SearchVolunteersRequest
  ):
    | Promise<SearchVolunteersResponse>
    | Observable<SearchVolunteersResponse>
    | SearchVolunteersResponse;

  getVolunteersByIds(
    request: GetVolunteersByIdsRequest
  ):
    | Promise<GetVolunteersByIdsResponse>
    | Observable<GetVolunteersByIdsResponse>
    | GetVolunteersByIdsResponse;

  addDonateOption(
    request: AddDonateOptionRequest
  ):
    | Promise<AddDonateOptionResponse>
    | Observable<AddDonateOptionResponse>
    | AddDonateOptionResponse;

  updateDonateOptions(
    request: UpdateDonateOptionRequest
  ):
    | Promise<UpdateDonateOptionResponse>
    | Observable<UpdateDonateOptionResponse>
    | UpdateDonateOptionResponse;

  deleteDonateOption(
    request: DeleteDonateOptionRequest
  ):
    | Promise<DeleteDonateOptionResponse>
    | Observable<DeleteDonateOptionResponse>
    | DeleteDonateOptionResponse;

  getVolunteerActivitiesByIds(
    request: GetVolunteerActivitiesByIdsRequest
  ):
    | Promise<GetVolunteerActivitiesByIdsResponse>
    | Observable<GetVolunteerActivitiesByIdsResponse>
    | GetVolunteerActivitiesByIdsResponse;
}

export function VolunteerServiceRPCControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "searchVolunteers",
      "getVolunteersByIds",
      "addDonateOption",
      "updateDonateOptions",
      "deleteDonateOption",
      "getVolunteerActivitiesByIds",
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
