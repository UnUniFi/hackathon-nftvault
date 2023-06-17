package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"nftvault/x/nftvault/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				PortId: types.PortID,
				AllowedChannelList: []types.AllowedChannel{
					{
						ChannelId: "0",
					},
					{
						ChannelId: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated allowedChannel",
			genState: &types.GenesisState{
				AllowedChannelList: []types.AllowedChannel{
					{
						ChannelId: "0",
					},
					{
						ChannelId: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
