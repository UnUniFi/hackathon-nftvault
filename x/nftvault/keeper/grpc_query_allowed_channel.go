package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"nftvault/x/nftvault/types"
)

func (k Keeper) AllowedChannelAll(c context.Context, req *types.QueryAllAllowedChannelRequest) (*types.QueryAllAllowedChannelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var allowedChannels []types.AllowedChannel
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	allowedChannelStore := prefix.NewStore(store, types.KeyPrefix(types.AllowedChannelKeyPrefix))

	pageRes, err := query.Paginate(allowedChannelStore, req.Pagination, func(key []byte, value []byte) error {
		var allowedChannel types.AllowedChannel
		if err := k.cdc.Unmarshal(value, &allowedChannel); err != nil {
			return err
		}

		allowedChannels = append(allowedChannels, allowedChannel)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAllowedChannelResponse{AllowedChannel: allowedChannels, Pagination: pageRes}, nil
}

func (k Keeper) AllowedChannel(c context.Context, req *types.QueryGetAllowedChannelRequest) (*types.QueryGetAllowedChannelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAllowedChannel(
		ctx,
		req.ChannelId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAllowedChannelResponse{AllowedChannel: val}, nil
}
