#!/bin/sh

# kill previous processes and run new networks
echo "Killing nftvaultd and removing previous data"
rm -rf ./data
killall nftvaultd 2>/dev/null

echo "Initializing both blockchains..."
sh ./network/init.sh
sh ./network/start.sh

# sleep until networks start
sleep 10

# start relayers
sh network/relayer/rly-init.sh
sh network/relayer/rly-start.sh
