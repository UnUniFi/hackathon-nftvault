package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftvault/x/nftvault/types"
)

func (k msgServer) LocalExecution(goCtx context.Context, msg *types.MsgLocalExecution) (*types.MsgLocalExecutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLocalExecutionResponse{}, nil
}
