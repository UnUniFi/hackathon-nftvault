package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/ignite/cli/ignite/pkg/cosmosibckeeper"
	"github.com/tendermint/tendermint/libs/log"
	"nftvault/x/nftvault/types"

	nftkeeper "github.com/cosmos/cosmos-sdk/x/nft/keeper"
	icatypes "github.com/cosmos/ibc-go/v5/modules/apps/27-interchain-accounts/types"
)

type (
	Keeper struct {
		*cosmosibckeeper.Keeper
		cdc        codec.BinaryCodec
		storeKey   storetypes.StoreKey
		memKey     storetypes.StoreKey
		paramstore paramtypes.Subspace

		nftKeeper nftkeeper.Keeper
		msgRouter icatypes.MessageRouter
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey storetypes.StoreKey,
	ps paramtypes.Subspace,
	channelKeeper cosmosibckeeper.ChannelKeeper,
	portKeeper cosmosibckeeper.PortKeeper,
	scopedKeeper cosmosibckeeper.ScopedKeeper,
	nftKeeper nftkeeper.Keeper,
	msgRouter icatypes.MessageRouter,
) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{
		Keeper: cosmosibckeeper.NewKeeper(
			types.PortKey,
			storeKey,
			channelKeeper,
			portKeeper,
			scopedKeeper,
		),
		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,
		nftKeeper:  nftKeeper,
		msgRouter:  msgRouter,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
