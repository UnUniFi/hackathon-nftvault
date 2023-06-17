package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"nftvault/x/nftvault/types"
)

func (k msgServer) LocalExecution(goCtx context.Context, msg *types.MsgLocalExecution) (*types.MsgLocalExecutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	owner := k.nftKeeper.GetOwner(ctx, msg.ClassId, msg.NftId)

	if msg.Creator != owner.String() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid creator")
	}

	vaultAddress := types.VaultAccountAddress(msg.ClassId, msg.NftId)

	var msgs []sdk.Msg

	for _, msgAny := range msg.Messages {
		var msg sdk.Msg
		k.cdc.UnpackAny(msgAny, &msg)

		signers := msg.GetSigners()
		if len(signers) > 1 || signers[0].String() != vaultAddress.String() {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid msg signer")
		}

		msgs = append(msgs, msg)
	}

	for _, msg := range msgs {
		k.executeMsg(ctx, msg)
	}

	return &types.MsgLocalExecutionResponse{}, nil
}
