package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"nftvault/x/nftvault/types"
)

func (k Keeper) VaultAccountAddress(goCtx context.Context, req *types.QueryVaultAccountAddressRequest) (*types.QueryVaultAccountAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	address := types.VaultAccountAddress(req.ClassId, req.NftId)

	return &types.QueryVaultAccountAddressResponse{
		Address: address.String(),
	}, nil
}
