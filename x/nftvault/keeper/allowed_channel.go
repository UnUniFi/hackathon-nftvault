package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"nftvault/x/nftvault/types"
)

// SetAllowedChannel set a specific allowedChannel in the store from its index
func (k Keeper) SetAllowedChannel(ctx sdk.Context, allowedChannel types.AllowedChannel) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AllowedChannelKeyPrefix))
	b := k.cdc.MustMarshal(&allowedChannel)
	store.Set(types.AllowedChannelKey(
		allowedChannel.ChannelId,
	), b)
}

// GetAllowedChannel returns a allowedChannel from its index
func (k Keeper) GetAllowedChannel(
	ctx sdk.Context,
	channelId string,

) (val types.AllowedChannel, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AllowedChannelKeyPrefix))

	b := store.Get(types.AllowedChannelKey(
		channelId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAllowedChannel removes a allowedChannel from the store
func (k Keeper) RemoveAllowedChannel(
	ctx sdk.Context,
	channelId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AllowedChannelKeyPrefix))
	store.Delete(types.AllowedChannelKey(
		channelId,
	))
}

// GetAllAllowedChannel returns all allowedChannel
func (k Keeper) GetAllAllowedChannel(ctx sdk.Context) (list []types.AllowedChannel) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AllowedChannelKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AllowedChannel
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
