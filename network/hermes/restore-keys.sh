#!/bin/bash
set -e

# Load shell variables
. ./network/hermes/variables.sh

### Sleep is needed otherwise the relayer crashes when trying to init
sleep 1
### Restore Keys
$HERMES_BINARY --config ./network/hermes/config.toml keys delete --chain test-1 --all
echo "alley afraid soup fall idea toss can goose become valve initial strong forward bright dish figure check leopard decide warfare hub unusual join cart" > test-1.txt
$HERMES_BINARY --config ./network/hermes/config.toml keys add --chain test-1 --mnemonic-file=test-1.txt
sleep 5

$HERMES_BINARY --config ./network/hermes/config.toml keys delete --chain test-2 --all
echo "record gift you once hip style during joke field prize dust unique length more pencil transfer quit train device arrive energy sort steak upset" > test-2.txt
$HERMES_BINARY --config ./network/hermes/config.toml keys add --chain test-2 --mnemonic-file=test-2.txt
sleep 5
