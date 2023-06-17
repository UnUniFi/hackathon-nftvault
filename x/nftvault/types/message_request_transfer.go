package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequestTransfer = "request_transfer"

var _ sdk.Msg = &MsgRequestTransfer{}

func NewMsgRequestTransfer(creator string) *MsgRequestTransfer {
	return &MsgRequestTransfer{
		Creator: creator,
	}
}

func (msg *MsgRequestTransfer) Route() string {
	return RouterKey
}

func (msg *MsgRequestTransfer) Type() string {
	return TypeMsgRequestTransfer
}

func (msg *MsgRequestTransfer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequestTransfer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequestTransfer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
