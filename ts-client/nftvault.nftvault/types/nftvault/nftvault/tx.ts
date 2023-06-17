/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "nftvault.nftvault";

export interface MsgLocalExecution {
  creator: string;
  classId: string;
  nftId: string;
  messages: Any[];
}

export interface MsgLocalExecutionResponse {
}

export interface MsgSendRequestTransfer {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendRequestTransferResponse {
}

function createBaseMsgLocalExecution(): MsgLocalExecution {
  return { creator: "", classId: "", nftId: "", messages: [] };
}

export const MsgLocalExecution = {
  encode(message: MsgLocalExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLocalExecution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgLocalExecution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLocalExecution>, I>>(object: I): MsgLocalExecution {
    const message = createBaseMsgLocalExecution();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
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

function createBaseMsgSendRequestTransfer(): MsgSendRequestTransfer {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}

export const MsgSendRequestTransfer = {
  encode(message: MsgSendRequestTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransfer();
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

  fromJSON(object: any): MsgSendRequestTransfer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendRequestTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransfer>, I>>(object: I): MsgSendRequestTransfer {
    const message = createBaseMsgSendRequestTransfer();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendRequestTransferResponse(): MsgSendRequestTransferResponse {
  return {};
}

export const MsgSendRequestTransferResponse = {
  encode(_: MsgSendRequestTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestTransferResponse();
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

  fromJSON(_: any): MsgSendRequestTransferResponse {
    return {};
  },

  toJSON(_: MsgSendRequestTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestTransferResponse>, I>>(_: I): MsgSendRequestTransferResponse {
    const message = createBaseMsgSendRequestTransferResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  LocalExecution(request: MsgLocalExecution): Promise<MsgLocalExecutionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendRequestTransfer(request: MsgSendRequestTransfer): Promise<MsgSendRequestTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LocalExecution = this.LocalExecution.bind(this);
    this.SendRequestTransfer = this.SendRequestTransfer.bind(this);
  }
  LocalExecution(request: MsgLocalExecution): Promise<MsgLocalExecutionResponse> {
    const data = MsgLocalExecution.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "LocalExecution", data);
    return promise.then((data) => MsgLocalExecutionResponse.decode(new _m0.Reader(data)));
  }

  SendRequestTransfer(request: MsgSendRequestTransfer): Promise<MsgSendRequestTransferResponse> {
    const data = MsgSendRequestTransfer.encode(request).finish();
    const promise = this.rpc.request("nftvault.nftvault.Msg", "SendRequestTransfer", data);
    return promise.then((data) => MsgSendRequestTransferResponse.decode(new _m0.Reader(data)));
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
