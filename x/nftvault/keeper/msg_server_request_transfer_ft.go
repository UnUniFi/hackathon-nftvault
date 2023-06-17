package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"nftvault/x/nftvault/types"
)

func (k msgServer) SendRequestTransferFt(goCtx context.Context, msg *types.MsgSendRequestTransferFt) (*types.MsgSendRequestTransferFtResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RequestTransferFtPacketData

	// Transmit the packet
	err := k.TransmitRequestTransferFtPacket(
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

	return &types.MsgSendRequestTransferFtResponse{}, nil
}
