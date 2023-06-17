package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftvault/x/nftvault/types"
)

func (k msgServer) RequestTransfer(goCtx context.Context, msg *types.MsgRequestTransfer) (*types.MsgRequestTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRequestTransferResponse{}, nil
}
