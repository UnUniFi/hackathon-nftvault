#!/bin/sh

# kill previous processes and run new networks
echo "Killing nftvaultd and removing previous data"
rm -rf ./data
killall nftvaultd 2>/dev/null
killall rly 2>/dev/null
killall hermes 2>/dev/null

echo "Initializing both blockchains..."
sh ./network/init.sh
sh ./network/start.sh

# sleep until networks start
sleep 10

# start rly
# sh network/relayer/rly-init.sh
# sh network/relayer/rly-start.sh

# ensure correct version of hermes installed - hermes 1.4.0+daad028
hermes version

# start hermes
sh ./network/hermes/restore-keys.sh
sh ./network/hermes/create-conn.sh
sh ./network/hermes/start.sh