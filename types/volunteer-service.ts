/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

export const protobufPackage = "VolunteerServicePackage";

/** getVolunteersByIds */
export interface VolunteerDto {
  id: string;
  name: string;
  activityTypes: ActivityType[];
  donateOption: DonateOption[];
}

export interface GetVolunteersByIdsRequest {
  ids: string[];
}

export interface GetVolunteersByIds {
  volunteers: VolunteerDto[];
}

/** updateDonateOptions */
export interface UpdateDonateOptionsRequest {}

export interface UpdateDonateOptionsResponse {
  volunteer?: VolunteerDto;
}

/** searchVolunteers */
export interface SearchVolunteersRequest {
  city: string;
  activityType: string[];
  donateOptions: string[];
}

export interface SearchVolunteersResponse {
  volunteers: VolunteerDto[];
}

export interface ActivityType {}

export interface DonateOption {}

export const VOLUNTEER_SERVICE_PACKAGE_PACKAGE_NAME = "VolunteerServicePackage";

export interface VolunteerServiceRPCClient {
  searchVolunteers(
    request: SearchVolunteersRequest
  ): Observable<SearchVolunteersResponse>;

  getVolunteersByIds(
    request: GetVolunteersByIdsRequest
  ): Observable<GetVolunteersByIds>;

  updateDonateOptions(
    request: UpdateDonateOptionsRequest
  ): Observable<UpdateDonateOptionsResponse>;
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
    | Promise<GetVolunteersByIds>
    | Observable<GetVolunteersByIds>
    | GetVolunteersByIds;

  updateDonateOptions(
    request: UpdateDonateOptionsRequest
  ):
    | Promise<UpdateDonateOptionsResponse>
    | Observable<UpdateDonateOptionsResponse>
    | UpdateDonateOptionsResponse;
}

export function VolunteerServiceRPCControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "searchVolunteers",
      "getVolunteersByIds",
      "updateDonateOptions",
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
