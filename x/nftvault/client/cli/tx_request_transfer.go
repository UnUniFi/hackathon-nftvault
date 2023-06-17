package cli

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/ibc-go/v5/modules/core/04-channel/client/utils"
	"github.com/spf13/cobra"
	"nftvault/x/nftvault/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pkg/errors"
)

var _ = strconv.Itoa(0)

func CmdSendRequestTransfer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-request-transfer [src-port] [src-channel] [origin-nfttransfer-port] [origin-nfttransfer-channel] [origin-class-id] [nft-id] [path/to/sdk_msg.json]",
		Short: "Send a request_transfer over IBC",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			originNfttransferPort := args[2]
			originNfttransferChannelId := args[3]
			originClassId := args[4]
			nftId := args[5]

			cdc := codec.NewProtoCodec(clientCtx.InterfaceRegistry)

			var txMsg sdk.Msg
			if err := cdc.UnmarshalInterfaceJSON([]byte(args[0]), &txMsg); err != nil {

				// check for file path if JSON input is not provided
				contents, err := os.ReadFile(args[5])
				if err != nil {
					return errors.Wrap(err, "neither JSON input nor path to .json file for sdk msg were provided")
				}

				if err := cdc.UnmarshalInterfaceJSON(contents, &txMsg); err != nil {
					return errors.Wrap(err, "error unmarshalling sdk msg file")
				}
			}

			msg := types.NewMsgSendRequestTransfer(
				creator,
				srcPort,
				srcChannel,
				timeoutTimestamp,
				originNfttransferPort,
				originNfttransferChannelId,
				originClassId,
				nftId,
				[]sdk.Msg{txMsg},
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
