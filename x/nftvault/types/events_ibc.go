package types

// IBC events
const (
	EventTypeTimeout                  = "timeout"
	EventTypeRequestTransferFtPacket  = "requestTransferFt_packet"
	EventTypeRequestTransferNftPacket = "requestTransferNft_packet"
	// this line is used by starport scaffolding # ibc/packet/event

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
