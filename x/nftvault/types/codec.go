package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgLocalExecution{}, "nftvault/LocalExecution", nil)
	cdc.RegisterConcrete(&MsgRequestTransfer{}, "nftvault/RequestTransfer", nil)
	cdc.RegisterConcrete(&MsgSendRequestTransferFt{}, "nftvault/SendRequestTransferFt", nil)
	cdc.RegisterConcrete(&MsgSendRequestTransferNft{}, "nftvault/SendRequestTransferNft", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLocalExecution{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequestTransfer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRequestTransferFt{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRequestTransferNft{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
