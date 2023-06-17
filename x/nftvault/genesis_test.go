package nftvault_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "nftvault/testutil/keeper"
	"nftvault/testutil/nullify"
	"nftvault/x/nftvault"
	"nftvault/x/nftvault/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		AllowedChannelList: []types.AllowedChannel{
			{
				ChannelId: "0",
			},
			{
				ChannelId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftvaultKeeper(t)
	nftvault.InitGenesis(ctx, *k, genesisState)
	got := nftvault.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.AllowedChannelList, got.AllowedChannelList)
	// this line is used by starport scaffolding # genesis/test/assert
}
