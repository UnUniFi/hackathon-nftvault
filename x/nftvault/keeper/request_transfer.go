package keeper

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v5/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v5/modules/core/24-host"
	"nftvault/x/nftvault/types"

	nfttransfertypes "github.com/bianjieai/nft-transfer/types"
	transfertypes "github.com/cosmos/ibc-go/v5/modules/apps/transfer/types"
)

// TransmitRequestTransferPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitRequestTransferPacket(
	ctx sdk.Context,
	packetData types.RequestTransferPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvRequestTransferPacket processes packet reception
func (k Keeper) OnRecvRequestTransferPacket(ctx sdk.Context, packet channeltypes.Packet, data types.RequestTransferPacketData) (packetAck types.RequestTransferPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	allowed, found := k.GetAllowedChannel(ctx, packet.SourceChannel)
	if !found {
		return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "channel not allowed")
	}
	if allowed.PortId != packet.SourcePort {
		return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "channel not allowed")
	}

	escrowAddress := nfttransfertypes.GetEscrowAddress(data.OriginNfttransferPort, data.OriginNfttransferChannelId)
	owner := k.nftKeeper.GetOwner(ctx, data.OriginClassId, data.NftId)
	if escrowAddress.String() != owner.String() {
		return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "specified vault nft is not escrowed")
	}

	vaultAddress := types.VaultAccountAddress(data.OriginClassId, data.NftId)

	for _, msgAny := range data.Tx.Messages {
		var msg sdk.Msg
		k.cdc.UnpackAny(msgAny, &msg)

		switch msg := msg.(type) {
		case *transfertypes.MsgTransfer:
			if msg.Sender != vaultAddress.String() {
				return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid receiver")
			}
		case *nfttransfertypes.MsgTransfer:
			if msg.Sender != vaultAddress.String() {
				return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid receiver")
			}
		default:
			return packetAck, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "unknown message type")
		}
	}

	return packetAck, nil
}

// OnAcknowledgementRequestTransferPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementRequestTransferPacket(ctx sdk.Context, packet channeltypes.Packet, data types.RequestTransferPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.RequestTransferPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutRequestTransferPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutRequestTransferPacket(ctx sdk.Context, packet channeltypes.Packet, data types.RequestTransferPacketData) error {

	// TODO: packet timeout logic

	return nil
}
