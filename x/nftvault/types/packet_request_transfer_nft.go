package types

// ValidateBasic is used for validating the packet
func (p RequestTransferNftPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestTransferNftPacketData) GetBytes() ([]byte, error) {
	var modulePacket NftvaultPacketData

	modulePacket.Packet = &NftvaultPacketData_RequestTransferNftPacket{&p}

	return modulePacket.Marshal()
}
