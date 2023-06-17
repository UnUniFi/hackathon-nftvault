package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLocalExecution = "local_execution"

var _ sdk.Msg = &MsgLocalExecution{}

func NewMsgLocalExecution(creator string, classID string, nftID string, msgs []sdk.Msg) *MsgLocalExecution {
	var messages []*codectypes.Any
	for _, msg := range msgs {
		protoAny, err := codectypes.NewAnyWithValue(msg)
		if err != nil {
			panic(err)
		}
		messages = append(messages, protoAny)
	}

	return &MsgLocalExecution{
		Creator:  creator,
		ClassId:  classID,
		NftId:    nftID,
		Messages: messages,
	}
}

func (msg *MsgLocalExecution) Route() string {
	return RouterKey
}

func (msg *MsgLocalExecution) Type() string {
	return TypeMsgLocalExecution
}

func (msg *MsgLocalExecution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLocalExecution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLocalExecution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
