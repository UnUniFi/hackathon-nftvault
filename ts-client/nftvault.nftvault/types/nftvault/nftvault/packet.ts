/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nftvault.nftvault";

export interface NftvaultPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  requestTransferPacket: RequestTransferPacketData | undefined;
}

export interface NoData {
}

/** RequestTransferPacketData defines a struct for the packet payload */
export interface RequestTransferPacketData {
}

/** RequestTransferPacketAck defines a struct for the packet acknowledgment */
export interface RequestTransferPacketAck {
}

function createBaseNftvaultPacketData(): NftvaultPacketData {
  return { noData: undefined, requestTransferPacket: undefined };
}

export const NftvaultPacketData = {
  encode(message: NftvaultPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.requestTransferPacket !== undefined) {
      RequestTransferPacketData.encode(message.requestTransferPacket, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.requestTransferPacket = RequestTransferPacketData.decode(reader, reader.uint32());
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
      requestTransferPacket: isSet(object.requestTransferPacket)
        ? RequestTransferPacketData.fromJSON(object.requestTransferPacket)
        : undefined,
    };
  },

  toJSON(message: NftvaultPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.requestTransferPacket !== undefined && (obj.requestTransferPacket = message.requestTransferPacket
      ? RequestTransferPacketData.toJSON(message.requestTransferPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftvaultPacketData>, I>>(object: I): NftvaultPacketData {
    const message = createBaseNftvaultPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.requestTransferPacket =
      (object.requestTransferPacket !== undefined && object.requestTransferPacket !== null)
        ? RequestTransferPacketData.fromPartial(object.requestTransferPacket)
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

function createBaseRequestTransferPacketData(): RequestTransferPacketData {
  return {};
}

export const RequestTransferPacketData = {
  encode(_: RequestTransferPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferPacketData();
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

  fromJSON(_: any): RequestTransferPacketData {
    return {};
  },

  toJSON(_: RequestTransferPacketData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferPacketData>, I>>(_: I): RequestTransferPacketData {
    const message = createBaseRequestTransferPacketData();
    return message;
  },
};

function createBaseRequestTransferPacketAck(): RequestTransferPacketAck {
  return {};
}

export const RequestTransferPacketAck = {
  encode(_: RequestTransferPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferPacketAck();
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

  fromJSON(_: any): RequestTransferPacketAck {
    return {};
  },

  toJSON(_: RequestTransferPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferPacketAck>, I>>(_: I): RequestTransferPacketAck {
    const message = createBaseRequestTransferPacketAck();
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
