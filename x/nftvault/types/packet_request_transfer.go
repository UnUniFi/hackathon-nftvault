package types

// ValidateBasic is used for validating the packet
func (p RequestTransferPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestTransferPacketData) GetBytes() ([]byte, error) {
	var modulePacket NftvaultPacketData

	modulePacket.Packet = &NftvaultPacketData_RequestTransferPacket{&p}

	return modulePacket.Marshal()
}
