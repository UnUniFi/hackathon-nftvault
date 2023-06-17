package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"nftvault/x/nftvault/types"
)

func (k msgServer) SendRequestTransfer(goCtx context.Context, msg *types.MsgSendRequestTransfer) (*types.MsgSendRequestTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RequestTransferPacketData

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
