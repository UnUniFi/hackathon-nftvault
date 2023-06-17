# nftvault module

## Overview

This module serve an account owned address like ERC6551.

### MsgLocaLExecution

Execute Msgs from the vault account that is linked to the nft.

```bash
appd tx nftvault local-execution [class-id] [nft-id] [path/to/sdk_msg.json] --from <key-name>
```

- The address of the `key-name` must be the owner of the NFT that has the `class-id` and `nft-id`.
- The signer of the msg that in the `sdk_msg.json` must be the address of the `key-name`.

#### Example

- NFT that has `A` class-id and `1` nft-id in the chain `X`.
- `F` is the vault account address of that NFT in the chain `X`.
- The account `P` owns that NFT in the chain `X`.
- The account `P` can execute msgs from the account `F`.

### MsgRequestTransfer

```bash
appd tx nftvault request-transfer [src-port] [src-channel] [origin-nfttransfer-port] [origin-nfttransfer-channel] [origin-class-id] [nft-id] [path/to/sdk_msg.json] --from <key-name>
```

- The address of the `key-name` must be the owner of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain.
- The msg that in the `sdk_msg.json` must be `MsgTransfer` of ICS20 `transfer` module or `MsgTransfer` of ICS721 `nft-transfer` module.
- The msg that in the `sdk_msg.json` will be executed in the origin chain of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain.
- The origin chain of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain, has to contain the `src-port` and `src-channel` into the `allowed_channel_list`.
- The sender of the msg that in the `sdk_msg.json` must be the address of the vault account of the NFT that has the `origin-class-id` and `nft-id` in the origin chain.
- The recipient of the msg that in the `sdk_msg.json` must be the address of the vault account of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain.

#### Example

- NFT that has `A` class-id and `1` nft-id in the chain `X`.
- `F` is the vault account address of that NFT in the chain `X`.
- That NFT has been transferred to the chain `Y`.
- In the chain `Y`, that NFT has `ibc/123` class-id and `1` nft-id.
- `G` is the vault account address of that NFT in the chain `Y`.
- The account `P` owns that NFT in the chain `Y`.
- The account `P` can request to transfer assets owned by the account `F` in the chain `X` to the account `G`.

### Queries

```bash
appd query nftvault list-allowed-channel
appd query nftvault vault-account-address [class-id] [nft-id]
```
