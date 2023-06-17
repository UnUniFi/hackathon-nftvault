package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AllowedChannelKeyPrefix is the prefix to retrieve all AllowedChannel
	AllowedChannelKeyPrefix = "AllowedChannel/value/"
)

// AllowedChannelKey returns the store key to retrieve a AllowedChannel from the index fields
func AllowedChannelKey(
	channelId string,
) []byte {
	var key []byte

	channelIdBytes := []byte(channelId)
	key = append(key, channelIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
