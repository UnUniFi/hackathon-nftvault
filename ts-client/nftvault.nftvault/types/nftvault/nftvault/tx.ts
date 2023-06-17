/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nftvault.nftvault";

export interface MsgLocalExecution {
  creator: string;
}

export interface MsgLocalExecutionResponse {
}

export interface MsgRequestTransfer {
  creator: string;
}

export interface MsgRequestTransferResponse {
}

export interface MsgSendRequestTransferFt {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendRequestTransferFtResponse {
}

export interface MsgSendRequestTransferNft {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendRequestTransferNftResponse {
}

function createBaseMsgLocalExecution(): MsgLocalExecution {
  return { creator: "" };
}

export const MsgLocalExecution = {
  encode(message: MsgLocalExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLocalExecution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLocalExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLocalExecution {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgLocalExecution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLocalExecution>, I>>(object: I): MsgLocalExecution {
    const message = createBaseMsgLocalExecution();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgLocalExecutionResponse(): MsgLocalExecutionResponse {
  return {};
}

export const MsgLocalExecutionResponse = {
  encode(_: MsgLocalExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLocalExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLocalExecutionResponse();
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

  fromJSON(_: any): MsgLocalExecutionResponse {
    return {};
  },

  toJSON(_: MsgLocalExecutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLocalExecutionResponse>, I>>(_: I): MsgLocalExecutionResponse {
    const message = createBaseMsgLocalExecutionResponse();
    return message;
  },
};

function createBaseMsgRequestTransfer(): MsgRequestTransfer {
  return { creator: "" };
}

export const MsgRequestTransfer = {
  encode(message: MsgRequestTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestTransfer {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRequestTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransfer>, I>>(object: I): MsgRequestTransfer {
    const message = createBaseMsgRequestTransfer();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRequestTransferResponse(): MsgRequestTransferResponse {
  return {};
}

export const MsgRequestTransferResponse = {
  encode(_: MsgRequestTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestTransferResponse();
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

  fromJSON(_: any): MsgRequestTransferResponse {
    return {};
  },

  toJSON(_: MsgRequestTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransferResponse>, I>>(_: I): MsgRequestTransferResponse {
    const message = createBaseMsgRequestTransferResponse();
    return message;
  },
};

function createBaseMsgSendRequestTransferFt(): MsgSendRequestTransferFt {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}

export const MsgSendRequestTransferFt = {
  encode(message: MsgSendRequestTransferFt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransferFt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransferFt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequestTransferFt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendRequestTransferFt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransferFt>, I>>(object: I): MsgSendRequestTransferFt {
    const message = createBaseMsgSendRequestTransferFt();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendRequestTransferFtResponse(): MsgSendRequestTransferFtResponse {
  return {};
}

export const MsgSendRequestTransferFtResponse = {
  encode(_: MsgSendRequestTransferFtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransferFtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransferFtResponse();
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

  fromJSON(_: any): MsgSendRequestTransferFtResponse {
    return {};
  },

  toJSON(_: MsgSendRequestTransferFtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransferFtResponse>, I>>(
    _: I,
  ): MsgSendRequestTransferFtResponse {
    const message = createBaseMsgSendRequestTransferFtResponse();
    return message;
  },
};

function createBaseMsgSendRequestTransferNft(): MsgSendRequestTransferNft {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}

export const MsgSendRequestTransferNft = {
  encode(message: MsgSendRequestTransferNft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransferNft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransferNft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequestTransferNft {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendRequestTransferNft): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransferNft>, I>>(object: I): MsgSendRequestTransferNft {
    const message = createBaseMsgSendRequestTransferNft();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendRequestTransferNftResponse(): MsgSendRequestTransferNftResponse {
  return {};
}

export const MsgSendRequestTransferNftResponse = {
  encode(_: MsgSendRequestTransferNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransferNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransferNftResponse();
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

  fromJSON(_: any): MsgSendRequestTransferNftResponse {
    return {};
  },

  toJSON(_: MsgSendRequestTransferNftResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransferNftResponse>, I>>(
    _: I,
  ): MsgSendRequestTransferNftResponse {
    const message = createBaseMsgSendRequestTransferNftResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  LocalExecution(request: MsgLocalExecution): Promise<MsgLocalExecutionResponse>;
  RequestTransfer(request: MsgRequestTransfer): Promise<MsgRequestTransferResponse>;
  SendRequestTransferFt(request: MsgSendRequestTransferFt): Promise<MsgSendRequestTransferFtResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendRequestTransferNft(request: MsgSendRequestTransferNft): Promise<MsgSendRequestTransferNftResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LocalExecution = this.LocalExecution.bind(this);
    this.RequestTransfer = this.RequestTransfer.bind(this);
    this.SendRequestTransferFt = this.SendRequestTransferFt.bind(this);
    this.SendRequestTransferNft = this.SendRequestTransferNft.bind(this);
  }
  LocalExecution(request: MsgLocalExecution): Promise<MsgLocalExecutionResponse> {
    const data = MsgLocalExecution.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "LocalExecution", data);
    return promise.then((data) => MsgLocalExecutionResponse.decode(new _m0.Reader(data)));
  }

  RequestTransfer(request: MsgRequestTransfer): Promise<MsgRequestTransferResponse> {
    const data = MsgRequestTransfer.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "RequestTransfer", data);
    return promise.then((data) => MsgRequestTransferResponse.decode(new _m0.Reader(data)));
  }

  SendRequestTransferFt(request: MsgSendRequestTransferFt): Promise<MsgSendRequestTransferFtResponse> {
    const data = MsgSendRequestTransferFt.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "SendRequestTransferFt", data);
    return promise.then((data) => MsgSendRequestTransferFtResponse.decode(new _m0.Reader(data)));
  }

  SendRequestTransferNft(request: MsgSendRequestTransferNft): Promise<MsgSendRequestTransferNftResponse> {
    const data = MsgSendRequestTransferNft.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "SendRequestTransferNft", data);
    return promise.then((data) => MsgSendRequestTransferNftResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
