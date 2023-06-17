/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

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
  classId: string;
  nftId: string;
  tx: CosmosTx | undefined;
}

/** RequestTransferPacketAck defines a struct for the packet acknowledgment */
export interface RequestTransferPacketAck {
}

/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTx {
  messages: Any[];
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
  return { classId: "", nftId: "", tx: undefined };
}

export const RequestTransferPacketData = {
  encode(message: RequestTransferPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.tx !== undefined) {
      CosmosTx.encode(message.tx, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTransferPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTransferPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.tx = CosmosTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestTransferPacketData {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      tx: isSet(object.tx) ? CosmosTx.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: RequestTransferPacketData): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.tx !== undefined && (obj.tx = message.tx ? CosmosTx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTransferPacketData>, I>>(object: I): RequestTransferPacketData {
    const message = createBaseRequestTransferPacketData();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.tx = (object.tx !== undefined && object.tx !== null) ? CosmosTx.fromPartial(object.tx) : undefined;
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

function createBaseCosmosTx(): CosmosTx {
  return { messages: [] };
}

export const CosmosTx = {
  encode(message: CosmosTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CosmosTx {
    return { messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [] };
  },

  toJSON(message: CosmosTx): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CosmosTx>, I>>(object: I): CosmosTx {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
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
