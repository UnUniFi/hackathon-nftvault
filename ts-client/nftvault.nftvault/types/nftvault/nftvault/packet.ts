/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nftvault.nftvault";

export interface NftvaultPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  requestTransferNftPacket:
    | RequestTransferNftPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  requestTransferFtPacket: RequestTransferFtPacketData | undefined;
}

export interface NoData {
}

/** RequestTransferFtPacketData defines a struct for the packet payload */
export interface RequestTransferFtPacketData {
}

/** RequestTransferFtPacketAck defines a struct for the packet acknowledgment */
export interface RequestTransferFtPacketAck {
}

/** RequestTransferNftPacketData defines a struct for the packet payload */
export interface RequestTransferNftPacketData {
}

/** RequestTransferNftPacketAck defines a struct for the packet acknowledgment */
export interface RequestTransferNftPacketAck {
}

function createBaseNftvaultPacketData(): NftvaultPacketData {
  return { noData: undefined, requestTransferNftPacket: undefined, requestTransferFtPacket: undefined };
}

export const NftvaultPacketData = {
  encode(message: NftvaultPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.requestTransferNftPacket !== undefined) {
      RequestTransferNftPacketData.encode(message.requestTransferNftPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestTransferFtPacket !== undefined) {
      RequestTransferFtPacketData.encode(message.requestTransferFtPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftvaultPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftvaultPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 3:
          message.requestTransferNftPacket = RequestTransferNftPacketData.decode(reader, reader.uint32());
          break;
        case 2:
          message.requestTransferFtPacket = RequestTransferFtPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftvaultPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      requestTransferNftPacket: isSet(object.requestTransferNftPacket)
        ? RequestTransferNftPacketData.fromJSON(object.requestTransferNftPacket)
        : undefined,
      requestTransferFtPacket: isSet(object.requestTransferFtPacket)
        ? RequestTransferFtPacketData.fromJSON(object.requestTransferFtPacket)
        : undefined,
    };
  },

  toJSON(message: NftvaultPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.requestTransferNftPacket !== undefined && (obj.requestTransferNftPacket = message.requestTransferNftPacket
      ? RequestTransferNftPacketData.toJSON(message.requestTransferNftPacket)
      : undefined);
    message.requestTransferFtPacket !== undefined && (obj.requestTransferFtPacket = message.requestTransferFtPacket
      ? RequestTransferFtPacketData.toJSON(message.requestTransferFtPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftvaultPacketData>, I>>(object: I): NftvaultPacketData {
    const message = createBaseNftvaultPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.requestTransferNftPacket =
      (object.requestTransferNftPacket !== undefined && object.requestTransferNftPacket !== null)
        ? RequestTransferNftPacketData.fromPartial(object.requestTransferNftPacket)
        : undefined;
    message.requestTransferFtPacket =
      (object.requestTransferFtPacket !== undefined && object.requestTransferFtPacket !== null)
        ? RequestTransferFtPacketData.fromPartial(object.requestTransferFtPacket)
        : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseRequestTransferFtPacketData(): RequestTransferFtPacketData {
  return {};
}

export const RequestTransferFtPacketData = {
  encode(_: RequestTransferFtPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferFtPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferFtPacketData();
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

  fromJSON(_: any): RequestTransferFtPacketData {
    return {};
  },

  toJSON(_: RequestTransferFtPacketData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferFtPacketData>, I>>(_: I): RequestTransferFtPacketData {
    const message = createBaseRequestTransferFtPacketData();
    return message;
  },
};

function createBaseRequestTransferFtPacketAck(): RequestTransferFtPacketAck {
  return {};
}

export const RequestTransferFtPacketAck = {
  encode(_: RequestTransferFtPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferFtPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferFtPacketAck();
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

  fromJSON(_: any): RequestTransferFtPacketAck {
    return {};
  },

  toJSON(_: RequestTransferFtPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferFtPacketAck>, I>>(_: I): RequestTransferFtPacketAck {
    const message = createBaseRequestTransferFtPacketAck();
    return message;
  },
};

function createBaseRequestTransferNftPacketData(): RequestTransferNftPacketData {
  return {};
}

export const RequestTransferNftPacketData = {
  encode(_: RequestTransferNftPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferNftPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferNftPacketData();
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

  fromJSON(_: any): RequestTransferNftPacketData {
    return {};
  },

  toJSON(_: RequestTransferNftPacketData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferNftPacketData>, I>>(_: I): RequestTransferNftPacketData {
    const message = createBaseRequestTransferNftPacketData();
    return message;
  },
};

function createBaseRequestTransferNftPacketAck(): RequestTransferNftPacketAck {
  return {};
}

export const RequestTransferNftPacketAck = {
  encode(_: RequestTransferNftPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferNftPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferNftPacketAck();
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

  fromJSON(_: any): RequestTransferNftPacketAck {
    return {};
  },

  toJSON(_: RequestTransferNftPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferNftPacketAck>, I>>(_: I): RequestTransferNftPacketAck {
    const message = createBaseRequestTransferNftPacketAck();
    return message;
  },
};

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
