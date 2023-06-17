package keeper

import (
	"nftvault/x/nftvault/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) GetDestinationChainIBCClassId(ctx sdk.Context, sourcePort string, sourceChannel string, classId string) string {
	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return ""
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	return types.DestinationChainIBCClassId(classId, destinationPort, destinationChannel)
}

func (k Keeper) GetDestinationChainVaultAccountAddress(ctx sdk.Context, sourcePort string, sourceChannel string, classId string, nftId string) string {
	ibcClassId := k.GetDestinationChainIBCClassId(ctx, sourcePort, sourceChannel, classId)

	return types.VaultAccountAddress(ibcClassId, nftId).String()
}
