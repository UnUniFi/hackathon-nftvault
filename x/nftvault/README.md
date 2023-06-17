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

### MsgRequestTransfer

```bash
appd tx nftvault request-transfer [src-port] [src-channel] [origin-nfttransfer-port] [origin-nfttransfer-channel] [origin-class-id] [nft-id] [path/to/sdk_msg.json] --from <key-name>
```

- The address of the `key-name` must be the owner of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain.
- The msg that in the `sdk_msg.json` must be `MsgTransfer` of ICS20 `transfer` module or `MsgTransfer` of ICS721 `nft-transfer` module.
- The sender of the msg that in the `sdk_msg.json` must be the address of the vault account of the NFT that has the `origin-class-id` and `nft-id` in the origin chain.
- The recipient of the msg that in the `sdk_msg.json` must be the address of the vault account of the NFT that originally has `origin-class-id` and `nft-id` in the origin chain and has been transferred to this chain.

### Queries

```bash
appd query nftvault list-allowed-channel
appd query nftvault vault-account-address [class-id] [nft-id]
```
