package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "nftvault/testutil/keeper"
	"nftvault/testutil/nullify"
	"nftvault/x/nftvault/keeper"
	"nftvault/x/nftvault/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAllowedChannel(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AllowedChannel {
	items := make([]types.AllowedChannel, n)
	for i := range items {
		items[i].ChannelId = strconv.Itoa(i)

		keeper.SetAllowedChannel(ctx, items[i])
	}
	return items
}

func TestAllowedChannelGet(t *testing.T) {
	keeper, ctx := keepertest.NftvaultKeeper(t)
	items := createNAllowedChannel(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAllowedChannel(ctx,
			item.ChannelId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAllowedChannelRemove(t *testing.T) {
	keeper, ctx := keepertest.NftvaultKeeper(t)
	items := createNAllowedChannel(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAllowedChannel(ctx,
			item.ChannelId,
		)
		_, found := keeper.GetAllowedChannel(ctx,
			item.ChannelId,
		)
		require.False(t, found)
	}
}

func TestAllowedChannelGetAll(t *testing.T) {
	keeper, ctx := keepertest.NftvaultKeeper(t)
	items := createNAllowedChannel(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAllowedChannel(ctx)),
	)
}
