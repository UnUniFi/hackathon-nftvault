/* eslint-disable */
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

/** Msg defines the Msg service. */
export interface Msg {
  LocalExecution(request: MsgLocalExecution): Promise<MsgLocalExecutionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RequestTransfer(request: MsgRequestTransfer): Promise<MsgRequestTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LocalExecution = this.LocalExecution.bind(this);
    this.RequestTransfer = this.RequestTransfer.bind(this);
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
