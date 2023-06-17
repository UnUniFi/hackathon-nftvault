package types

// ValidateBasic is used for validating the packet
func (p RequestTransferFtPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestTransferFtPacketData) GetBytes() ([]byte, error) {
	var modulePacket NftvaultPacketData

	modulePacket.Packet = &NftvaultPacketData_RequestTransferFtPacket{&p}

	return modulePacket.Marshal()
}
