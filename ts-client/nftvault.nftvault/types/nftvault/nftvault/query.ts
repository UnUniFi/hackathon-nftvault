/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AllowedChannel } from "./allowed_channel";
import { Params } from "./params";

export const protobufPackage = "nftvault.nftvault";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAllowedChannelRequest {
  channelId: string;
}

export interface QueryGetAllowedChannelResponse {
  allowedChannel: AllowedChannel | undefined;
}

export interface QueryAllAllowedChannelRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAllowedChannelResponse {
  allowedChannel: AllowedChannel[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllowedChannelRequest(): QueryGetAllowedChannelRequest {
  return { channelId: "" };
}

export const QueryGetAllowedChannelRequest = {
  encode(message: QueryGetAllowedChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllowedChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllowedChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllowedChannelRequest {
    return { channelId: isSet(object.channelId) ? String(object.channelId) : "" };
  },

  toJSON(message: QueryGetAllowedChannelRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllowedChannelRequest>, I>>(
    object: I,
  ): QueryGetAllowedChannelRequest {
    const message = createBaseQueryGetAllowedChannelRequest();
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryGetAllowedChannelResponse(): QueryGetAllowedChannelResponse {
  return { allowedChannel: undefined };
}

export const QueryGetAllowedChannelResponse = {
  encode(message: QueryGetAllowedChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowedChannel !== undefined) {
      AllowedChannel.encode(message.allowedChannel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllowedChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllowedChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedChannel = AllowedChannel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllowedChannelResponse {
    return {
      allowedChannel: isSet(object.allowedChannel) ? AllowedChannel.fromJSON(object.allowedChannel) : undefined,
    };
  },

  toJSON(message: QueryGetAllowedChannelResponse): unknown {
    const obj: any = {};
    message.allowedChannel !== undefined
      && (obj.allowedChannel = message.allowedChannel ? AllowedChannel.toJSON(message.allowedChannel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllowedChannelResponse>, I>>(
    object: I,
  ): QueryGetAllowedChannelResponse {
    const message = createBaseQueryGetAllowedChannelResponse();
    message.allowedChannel = (object.allowedChannel !== undefined && object.allowedChannel !== null)
      ? AllowedChannel.fromPartial(object.allowedChannel)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAllowedChannelRequest(): QueryAllAllowedChannelRequest {
  return { pagination: undefined };
}

export const QueryAllAllowedChannelRequest = {
  encode(message: QueryAllAllowedChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllowedChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllowedChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAllowedChannelRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAllowedChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAllowedChannelRequest>, I>>(
    object: I,
  ): QueryAllAllowedChannelRequest {
    const message = createBaseQueryAllAllowedChannelRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAllowedChannelResponse(): QueryAllAllowedChannelResponse {
  return { allowedChannel: [], pagination: undefined };
}

export const QueryAllAllowedChannelResponse = {
  encode(message: QueryAllAllowedChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedChannel) {
      AllowedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllowedChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllowedChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedChannel.push(AllowedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAllowedChannelResponse {
    return {
      allowedChannel: Array.isArray(object?.allowedChannel)
        ? object.allowedChannel.map((e: any) => AllowedChannel.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAllowedChannelResponse): unknown {
    const obj: any = {};
    if (message.allowedChannel) {
      obj.allowedChannel = message.allowedChannel.map((e) => e ? AllowedChannel.toJSON(e) : undefined);
    } else {
      obj.allowedChannel = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAllowedChannelResponse>, I>>(
    object: I,
  ): QueryAllAllowedChannelResponse {
    const message = createBaseQueryAllAllowedChannelResponse();
    message.allowedChannel = object.allowedChannel?.map((e) => AllowedChannel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a AllowedChannel by index. */
  AllowedChannel(request: QueryGetAllowedChannelRequest): Promise<QueryGetAllowedChannelResponse>;
  /** Queries a list of AllowedChannel items. */
  AllowedChannelAll(request: QueryAllAllowedChannelRequest): Promise<QueryAllAllowedChannelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AllowedChannel = this.AllowedChannel.bind(this);
    this.AllowedChannelAll = this.AllowedChannelAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  AllowedChannel(request: QueryGetAllowedChannelRequest): Promise<QueryGetAllowedChannelResponse> {
    const data = QueryGetAllowedChannelRequest.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Query", "AllowedChannel", data);
    return promise.then((data) => QueryGetAllowedChannelResponse.decode(new _m0.Reader(data)));
  }

  AllowedChannelAll(request: QueryAllAllowedChannelRequest): Promise<QueryAllAllowedChannelResponse> {
    const data = QueryAllAllowedChannelRequest.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Query", "AllowedChannelAll", data);
    return promise.then((data) => QueryAllAllowedChannelResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
