/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";

export const protobufPackage = "AuthServicePackage";

export interface GetUserDto {
  authId: string;
}

export interface UserResponseDto {
  user?: UserDto;
}

export interface GetTokenDto {
  authId: string;
}

export interface RefreshTokenDto {
  authId: string;
  refreshToken: string;
}

export interface TokenResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface UserDto {
  id: string;
  loginId: string;
  name: string;
}

export const AUTH_SERVICE_PACKAGE_PACKAGE_NAME = "AuthServicePackage";

export interface AuthServiceRPCClient {
  getUser(request: GetUserDto): Observable<UserResponseDto>;

  getToken(request: GetTokenDto): Observable<TokenResponseDto>;

  refreshToken(request: RefreshTokenDto): Observable<TokenResponseDto>;
}

export interface AuthServiceRPCController {
  getUser(
    request: GetUserDto
  ): Promise<UserResponseDto> | Observable<UserResponseDto> | UserResponseDto;

  getToken(
    request: GetTokenDto
  ):
    | Promise<TokenResponseDto>
    | Observable<TokenResponseDto>
    | TokenResponseDto;

  refreshToken(
    request: RefreshTokenDto
  ):
    | Promise<TokenResponseDto>
    | Observable<TokenResponseDto>
    | TokenResponseDto;
}

export function AuthServiceRPCControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUser", "getToken", "refreshToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("AuthServiceRPC", method)(
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
      GrpcStreamMethod("AuthServiceRPC", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const AUTH_SERVICE_RP_C_SERVICE_NAME = "AuthServiceRPC";

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
