package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLocalExecution = "local_execution"

var _ sdk.Msg = &MsgLocalExecution{}

func NewMsgLocalExecution(creator string) *MsgLocalExecution {
	return &MsgLocalExecution{
		Creator: creator,
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
