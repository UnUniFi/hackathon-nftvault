package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"nftvault/x/nftvault/types"
)

func CmdListAllowedChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-allowed-channel",
		Short: "list all allowed_channel",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllAllowedChannelRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.AllowedChannelAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAllowedChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-allowed-channel [channel-id]",
		Short: "shows a allowed_channel",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argChannelId := args[0]

			params := &types.QueryGetAllowedChannelRequest{
				ChannelId: argChannelId,
			}

			res, err := queryClient.AllowedChannel(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
