package types

import (
	"fmt"

	nfttransfertypes "github.com/bianjieai/nft-transfer/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func VaultAccountAddress(classId string, nftId string) sdk.AccAddress {
	return authtypes.NewModuleAddress(fmt.Sprintf("%s/%s/%s", ModuleName, classId, nftId))
}

func DestinationChainIBCClassId(destinationPort string, destinationChannel string, classId string) string {
	classPrefix := nfttransfertypes.GetClassPrefix(destinationPort, destinationChannel)
	prefixedClassID := classPrefix + classId
	classTrace := nfttransfertypes.ParseClassTrace(prefixedClassID)

	return classTrace.IBCClassID()
}
