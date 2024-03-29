// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nftvault/nftvault/packet.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type NftvaultPacketData struct {
	// Types that are valid to be assigned to Packet:
	//	*NftvaultPacketData_NoData
	//	*NftvaultPacketData_RequestTransferPacket
	Packet isNftvaultPacketData_Packet `protobuf_oneof:"packet"`
}

func (m *NftvaultPacketData) Reset()         { *m = NftvaultPacketData{} }
func (m *NftvaultPacketData) String() string { return proto.CompactTextString(m) }
func (*NftvaultPacketData) ProtoMessage()    {}
func (*NftvaultPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_7d1a08bd4694c086, []int{0}
}
func (m *NftvaultPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NftvaultPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NftvaultPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NftvaultPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NftvaultPacketData.Merge(m, src)
}
func (m *NftvaultPacketData) XXX_Size() int {
	return m.Size()
}
func (m *NftvaultPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_NftvaultPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_NftvaultPacketData proto.InternalMessageInfo

type isNftvaultPacketData_Packet interface {
	isNftvaultPacketData_Packet()
	MarshalTo([]byte) (int, error)
	Size() int
}

type NftvaultPacketData_NoData struct {
	NoData *NoData `protobuf:"bytes,1,opt,name=noData,proto3,oneof" json:"noData,omitempty"`
}
type NftvaultPacketData_RequestTransferPacket struct {
	RequestTransferPacket *RequestTransferPacketData `protobuf:"bytes,2,opt,name=requestTransferPacket,proto3,oneof" json:"requestTransferPacket,omitempty"`
}

func (*NftvaultPacketData_NoData) isNftvaultPacketData_Packet()                {}
func (*NftvaultPacketData_RequestTransferPacket) isNftvaultPacketData_Packet() {}

func (m *NftvaultPacketData) GetPacket() isNftvaultPacketData_Packet {
	if m != nil {
		return m.Packet
	}
	return nil
}

func (m *NftvaultPacketData) GetNoData() *NoData {
	if x, ok := m.GetPacket().(*NftvaultPacketData_NoData); ok {
		return x.NoData
	}
	return nil
}

func (m *NftvaultPacketData) GetRequestTransferPacket() *RequestTransferPacketData {
	if x, ok := m.GetPacket().(*NftvaultPacketData_RequestTransferPacket); ok {
		return x.RequestTransferPacket
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*NftvaultPacketData) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*NftvaultPacketData_NoData)(nil),
		(*NftvaultPacketData_RequestTransferPacket)(nil),
	}
}

type NoData struct {
}

func (m *NoData) Reset()         { *m = NoData{} }
func (m *NoData) String() string { return proto.CompactTextString(m) }
func (*NoData) ProtoMessage()    {}
func (*NoData) Descriptor() ([]byte, []int) {
	return fileDescriptor_7d1a08bd4694c086, []int{1}
}
func (m *NoData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NoData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NoData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NoData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NoData.Merge(m, src)
}
func (m *NoData) XXX_Size() int {
	return m.Size()
}
func (m *NoData) XXX_DiscardUnknown() {
	xxx_messageInfo_NoData.DiscardUnknown(m)
}

var xxx_messageInfo_NoData proto.InternalMessageInfo

// RequestTransferPacketData defines a struct for the packet payload
type RequestTransferPacketData struct {
	OriginNfttransferPort      string   `protobuf:"bytes,1,opt,name=origin_nfttransfer_port,json=originNfttransferPort,proto3" json:"origin_nfttransfer_port,omitempty"`
	OriginNfttransferChannelId string   `protobuf:"bytes,2,opt,name=origin_nfttransfer_channel_id,json=originNfttransferChannelId,proto3" json:"origin_nfttransfer_channel_id,omitempty"`
	OriginClassId              string   `protobuf:"bytes,3,opt,name=origin_class_id,json=originClassId,proto3" json:"origin_class_id,omitempty"`
	NftId                      string   `protobuf:"bytes,4,opt,name=nft_id,json=nftId,proto3" json:"nft_id,omitempty"`
	Tx                         CosmosTx `protobuf:"bytes,5,opt,name=tx,proto3" json:"tx"`
}

func (m *RequestTransferPacketData) Reset()         { *m = RequestTransferPacketData{} }
func (m *RequestTransferPacketData) String() string { return proto.CompactTextString(m) }
func (*RequestTransferPacketData) ProtoMessage()    {}
func (*RequestTransferPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_7d1a08bd4694c086, []int{2}
}
func (m *RequestTransferPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RequestTransferPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RequestTransferPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RequestTransferPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestTransferPacketData.Merge(m, src)
}
func (m *RequestTransferPacketData) XXX_Size() int {
	return m.Size()
}
func (m *RequestTransferPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestTransferPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_RequestTransferPacketData proto.InternalMessageInfo

func (m *RequestTransferPacketData) GetOriginNfttransferPort() string {
	if m != nil {
		return m.OriginNfttransferPort
	}
	return ""
}

func (m *RequestTransferPacketData) GetOriginNfttransferChannelId() string {
	if m != nil {
		return m.OriginNfttransferChannelId
	}
	return ""
}

func (m *RequestTransferPacketData) GetOriginClassId() string {
	if m != nil {
		return m.OriginClassId
	}
	return ""
}

func (m *RequestTransferPacketData) GetNftId() string {
	if m != nil {
		return m.NftId
	}
	return ""
}

func (m *RequestTransferPacketData) GetTx() CosmosTx {
	if m != nil {
		return m.Tx
	}
	return CosmosTx{}
}

// RequestTransferPacketAck defines a struct for the packet acknowledgment
type RequestTransferPacketAck struct {
}

func (m *RequestTransferPacketAck) Reset()         { *m = RequestTransferPacketAck{} }
func (m *RequestTransferPacketAck) String() string { return proto.CompactTextString(m) }
func (*RequestTransferPacketAck) ProtoMessage()    {}
func (*RequestTransferPacketAck) Descriptor() ([]byte, []int) {
	return fileDescriptor_7d1a08bd4694c086, []int{3}
}
func (m *RequestTransferPacketAck) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RequestTransferPacketAck) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RequestTransferPacketAck.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RequestTransferPacketAck) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestTransferPacketAck.Merge(m, src)
}
func (m *RequestTransferPacketAck) XXX_Size() int {
	return m.Size()
}
func (m *RequestTransferPacketAck) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestTransferPacketAck.DiscardUnknown(m)
}

var xxx_messageInfo_RequestTransferPacketAck proto.InternalMessageInfo

// CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
type CosmosTx struct {
	Messages []*types.Any `protobuf:"bytes,1,rep,name=messages,proto3" json:"messages,omitempty"`
}

func (m *CosmosTx) Reset()         { *m = CosmosTx{} }
func (m *CosmosTx) String() string { return proto.CompactTextString(m) }
func (*CosmosTx) ProtoMessage()    {}
func (*CosmosTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_7d1a08bd4694c086, []int{4}
}
func (m *CosmosTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CosmosTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CosmosTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CosmosTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CosmosTx.Merge(m, src)
}
func (m *CosmosTx) XXX_Size() int {
	return m.Size()
}
func (m *CosmosTx) XXX_DiscardUnknown() {
	xxx_messageInfo_CosmosTx.DiscardUnknown(m)
}

var xxx_messageInfo_CosmosTx proto.InternalMessageInfo

func (m *CosmosTx) GetMessages() []*types.Any {
	if m != nil {
		return m.Messages
	}
	return nil
}

func init() {
	proto.RegisterType((*NftvaultPacketData)(nil), "nftvault.nftvault.NftvaultPacketData")
	proto.RegisterType((*NoData)(nil), "nftvault.nftvault.NoData")
	proto.RegisterType((*RequestTransferPacketData)(nil), "nftvault.nftvault.RequestTransferPacketData")
	proto.RegisterType((*RequestTransferPacketAck)(nil), "nftvault.nftvault.RequestTransferPacketAck")
	proto.RegisterType((*CosmosTx)(nil), "nftvault.nftvault.CosmosTx")
}

func init() { proto.RegisterFile("nftvault/nftvault/packet.proto", fileDescriptor_7d1a08bd4694c086) }

var fileDescriptor_7d1a08bd4694c086 = []byte{
	// 408 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xc1, 0xae, 0x9a, 0x40,
	0x14, 0x86, 0x81, 0x7b, 0x25, 0x38, 0xa6, 0x69, 0x3a, 0xd1, 0x14, 0x68, 0x4a, 0x0d, 0x8b, 0xc6,
	0x45, 0x03, 0xad, 0x26, 0x5d, 0x75, 0xa3, 0x76, 0x51, 0x37, 0xc6, 0x10, 0x57, 0xdd, 0x98, 0x11,
	0x06, 0x6a, 0xc4, 0x19, 0xca, 0x8c, 0x0d, 0xbe, 0x41, 0x97, 0x7d, 0x9d, 0xbe, 0x81, 0x4b, 0x97,
	0x5d, 0x35, 0x8d, 0xbe, 0x48, 0xc3, 0x0c, 0xe8, 0x42, 0xee, 0xee, 0x70, 0xfe, 0xff, 0xff, 0x98,
	0x73, 0x72, 0x80, 0x43, 0x62, 0xfe, 0x03, 0xed, 0x53, 0xee, 0x5f, 0x8b, 0x0c, 0x85, 0x5b, 0xcc,
	0xbd, 0x2c, 0xa7, 0x9c, 0xc2, 0x17, 0x75, 0xdb, 0xab, 0x0b, 0xbb, 0x9b, 0xd0, 0x84, 0x0a, 0xd5,
	0x2f, 0x2b, 0x69, 0xb4, 0xad, 0x84, 0xd2, 0x24, 0xc5, 0xbe, 0xf8, 0x5a, 0xef, 0x63, 0x1f, 0x91,
	0x83, 0x94, 0xdc, 0xdf, 0x2a, 0x80, 0xf3, 0x2a, 0xbd, 0x10, 0xf0, 0xcf, 0x88, 0x23, 0x38, 0x02,
	0x3a, 0xa1, 0x65, 0x65, 0xaa, 0x7d, 0x75, 0xd0, 0x19, 0x5a, 0xde, 0xdd, 0xbf, 0xbc, 0xb9, 0x30,
	0x7c, 0x51, 0x82, 0xca, 0x0a, 0x23, 0xd0, 0xcb, 0xf1, 0xf7, 0x3d, 0x66, 0x7c, 0x99, 0x23, 0xc2,
	0x62, 0x9c, 0x4b, 0xa2, 0xa9, 0x09, 0xc6, 0xbb, 0x06, 0x46, 0xd0, 0xe4, 0xaf, 0xb0, 0xcd, 0xb0,
	0x89, 0x01, 0x74, 0xb9, 0x05, 0xd7, 0x00, 0xba, 0x7c, 0x83, 0xfb, 0x53, 0x03, 0xd6, 0x93, 0x28,
	0xf8, 0x11, 0xbc, 0xa4, 0xf9, 0x26, 0xd9, 0x90, 0x15, 0x89, 0x39, 0xaf, 0xf4, 0x55, 0x46, 0x73,
	0x2e, 0xa6, 0x6b, 0x07, 0x3d, 0x29, 0xcf, 0x6f, 0xea, 0x82, 0xe6, 0x1c, 0x8e, 0xc1, 0xeb, 0x86,
	0x5c, 0xf8, 0x0d, 0x11, 0x82, 0xd3, 0xd5, 0x26, 0x12, 0x73, 0xb5, 0x03, 0xfb, 0x2e, 0x3d, 0x95,
	0x96, 0x59, 0x04, 0xdf, 0x82, 0xe7, 0x15, 0x22, 0x4c, 0x11, 0x63, 0x65, 0xe8, 0x41, 0x84, 0x9e,
	0xc9, 0xf6, 0xb4, 0xec, 0xce, 0x22, 0xd8, 0x03, 0x3a, 0x89, 0x79, 0x29, 0x3f, 0x0a, 0xb9, 0x45,
	0x62, 0x3e, 0x8b, 0xe0, 0x07, 0xa0, 0xf1, 0xc2, 0x6c, 0x89, 0xf5, 0xbd, 0x6a, 0x58, 0xdf, 0x94,
	0xb2, 0x1d, 0x65, 0xcb, 0x62, 0xf2, 0x78, 0xfc, 0xfb, 0x46, 0x09, 0x34, 0x5e, 0xb8, 0x36, 0x30,
	0x1b, 0x37, 0x31, 0x0e, 0xb7, 0xee, 0x27, 0x60, 0xd4, 0x09, 0xf8, 0x1e, 0x18, 0x3b, 0xcc, 0x18,
	0x4a, 0x30, 0x33, 0xd5, 0xfe, 0xc3, 0xa0, 0x33, 0xec, 0x7a, 0xf2, 0x4c, 0xbc, 0xfa, 0x4c, 0xbc,
	0x31, 0x39, 0x04, 0x57, 0xd7, 0x64, 0x74, 0x3c, 0x3b, 0xea, 0xe9, 0xec, 0xa8, 0xff, 0xce, 0x8e,
	0xfa, 0xeb, 0xe2, 0x28, 0xa7, 0x8b, 0xa3, 0xfc, 0xb9, 0x38, 0xca, 0x57, 0xeb, 0x7a, 0x9f, 0xc5,
	0xed, 0x54, 0xf9, 0x21, 0xc3, 0x6c, 0xad, 0x0b, 0xd8, 0xe8, 0x7f, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x47, 0x02, 0xff, 0x20, 0xcc, 0x02, 0x00, 0x00,
}

func (m *NftvaultPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NftvaultPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftvaultPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Packet != nil {
		{
			size := m.Packet.Size()
			i -= size
			if _, err := m.Packet.MarshalTo(dAtA[i:]); err != nil {
				return 0, err
			}
		}
	}
	return len(dAtA) - i, nil
}

func (m *NftvaultPacketData_NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftvaultPacketData_NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.NoData != nil {
		{
			size, err := m.NoData.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}
func (m *NftvaultPacketData_RequestTransferPacket) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftvaultPacketData_RequestTransferPacket) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.RequestTransferPacket != nil {
		{
			size, err := m.RequestTransferPacket.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}
func (m *NoData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *RequestTransferPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RequestTransferPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RequestTransferPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Tx.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintPacket(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if len(m.NftId) > 0 {
		i -= len(m.NftId)
		copy(dAtA[i:], m.NftId)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.NftId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.OriginClassId) > 0 {
		i -= len(m.OriginClassId)
		copy(dAtA[i:], m.OriginClassId)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.OriginClassId)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.OriginNfttransferChannelId) > 0 {
		i -= len(m.OriginNfttransferChannelId)
		copy(dAtA[i:], m.OriginNfttransferChannelId)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.OriginNfttransferChannelId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.OriginNfttransferPort) > 0 {
		i -= len(m.OriginNfttransferPort)
		copy(dAtA[i:], m.OriginNfttransferPort)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.OriginNfttransferPort)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RequestTransferPacketAck) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RequestTransferPacketAck) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RequestTransferPacketAck) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *CosmosTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CosmosTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CosmosTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Messages) > 0 {
		for iNdEx := len(m.Messages) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Messages[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintPacket(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintPacket(dAtA []byte, offset int, v uint64) int {
	offset -= sovPacket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *NftvaultPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Packet != nil {
		n += m.Packet.Size()
	}
	return n
}

func (m *NftvaultPacketData_NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.NoData != nil {
		l = m.NoData.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *NftvaultPacketData_RequestTransferPacket) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.RequestTransferPacket != nil {
		l = m.RequestTransferPacket.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *RequestTransferPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.OriginNfttransferPort)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.OriginNfttransferChannelId)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.OriginClassId)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.NftId)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = m.Tx.Size()
	n += 1 + l + sovPacket(uint64(l))
	return n
}

func (m *RequestTransferPacketAck) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *CosmosTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Messages) > 0 {
		for _, e := range m.Messages {
			l = e.Size()
			n += 1 + l + sovPacket(uint64(l))
		}
	}
	return n
}

func sovPacket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPacket(x uint64) (n int) {
	return sovPacket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NftvaultPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NftvaultPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NftvaultPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NoData", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &NoData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &NftvaultPacketData_NoData{v}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RequestTransferPacket", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &RequestTransferPacketData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &NftvaultPacketData_RequestTransferPacket{v}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *NoData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NoData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NoData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RequestTransferPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RequestTransferPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RequestTransferPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OriginNfttransferPort", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OriginNfttransferPort = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OriginNfttransferChannelId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OriginNfttransferChannelId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OriginClassId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OriginClassId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NftId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NftId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tx", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Tx.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RequestTransferPacketAck) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RequestTransferPacketAck: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RequestTransferPacketAck: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *CosmosTx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: CosmosTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CosmosTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Messages", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Messages = append(m.Messages, &types.Any{})
			if err := m.Messages[len(m.Messages)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPacket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPacket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPacket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPacket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPacket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPacket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPacket = fmt.Errorf("proto: unexpected end of group")
)
