package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "nftvault/testutil/keeper"
	"nftvault/x/nftvault/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NftvaultKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
