package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"nftvault/x/nftvault/types"
)

var _ = strconv.Itoa(0)

func CmdVaultAccountAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "vault-account-address [class-id] [nft-id]",
		Short: "Query vault_account_address",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqClassId := args[0]
			reqNftId := args[1]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryVaultAccountAddressRequest{

				ClassId: reqClassId,
				NftId:   reqNftId,
			}

			res, err := queryClient.VaultAccountAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
