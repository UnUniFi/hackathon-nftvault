package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendRequestTransfer{}

func NewMsgSendRequestTransfer(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	originNfttransferPort string,
	originNfttransferChannelId string,
	originClassId string,
	nftId string,
	msgs []sdk.Msg,
) *MsgSendRequestTransfer {
	var messages []*codectypes.Any
	for _, msg := range msgs {
		protoAny, err := codectypes.NewAnyWithValue(msg)
		if err != nil {
			panic(err)
		}
		messages = append(messages, protoAny)
	}

	return &MsgSendRequestTransfer{
		Creator:                    creator,
		Port:                       port,
		ChannelID:                  channelID,
		TimeoutTimestamp:           timeoutTimestamp,
		OriginNfttransferPort:      originNfttransferPort,
		OriginNfttransferChannelId: originNfttransferChannelId,
		OriginClassId:              originClassId,
		NftId:                      nftId,
		Messages:                   messages,
	}
}

func (msg *MsgSendRequestTransfer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendRequestTransfer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
