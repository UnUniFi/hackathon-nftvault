#!/bin/sh

hermes --config ./network/hermes/config.toml create channel \
 --a-chain test-2 --a-port nftvault \
 --b-port nftvault --a-connection connection-0 \
 --chan-version 'nftvault-1'


hermes --config ./network/hermes/config.toml create channel \
 --a-chain test-2 --a-port transfer \
 --b-port transfer --a-connection connection-0 \
 --chan-version ''

# channels
nftvaultd query ibc channel channels
# channels:
# - channel_id: channel-0
#   connection_hops:
#   - connection-0
#   counterparty:
#     channel_id: channel-0
#     port_id: nftvault
#   ordering: ORDER_UNORDERED
#   port_id: nftvault
#   state: STATE_OPEN
#   version: nftvault-1
# - channel_id: channel-1
#   connection_hops:
#   - connection-0
#   counterparty:
#     channel_id: channel-2
#     port_id: transfer
#   ordering: ORDER_UNORDERED
#   port_id: transfer
#   state: STATE_OPEN
#   version: ics20-1

nftvaultd tx hoge send-request-transfer [src-port] [src-channel] [origin-nfttransfer-port] [origin-nfttransfer-channel] [origin-class-id] [nft-id] [path/to/sdk_msg.json]
