package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"nftvault/x/nftvault/types"

	nfttransfertypes "github.com/bianjieai/nft-transfer/types"
	transfertypes "github.com/cosmos/ibc-go/v5/modules/apps/transfer/types"
)

func (k msgServer) SendRequestTransfer(goCtx context.Context, msg *types.MsgSendRequestTransfer) (*types.MsgSendRequestTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	requesterChainIBCClassId := types.DestinationChainIBCClassId(msg.OriginNfttransferChannelId, msg.OriginNfttransferChannelId, msg.OriginClassId)
	requesterVaultAddress := types.VaultAccountAddress(requesterChainIBCClassId, msg.NftId)

	for _, msgAny := range msg.Messages {
		var msg sdk.Msg
		k.cdc.UnpackAny(msgAny, &msg)

		switch msg := msg.(type) {
		case *transfertypes.MsgTransfer:
			if msg.Receiver != requesterVaultAddress.String() {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid receiver")
			}
		case *nfttransfertypes.MsgTransfer:
			if msg.Receiver != requesterVaultAddress.String() {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid receiver")
			}
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "unknown message type")
		}
	}

	// Construct the packet
	var packet types.RequestTransferPacketData

	packet.OriginNfttransferPort = msg.OriginNfttransferPort
	packet.OriginNfttransferChannelId = msg.OriginNfttransferChannelId
	packet.OriginClassId = msg.OriginClassId
	packet.NftId = msg.NftId
	packet.Tx = types.CosmosTx{
		Messages: msg.Messages,
	}

	// Transmit the packet
	err := k.TransmitRequestTransferPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendRequestTransferResponse{}, nil
}
