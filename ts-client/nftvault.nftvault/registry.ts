import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgLocalExecution } from "./types/nftvault/nftvault/tx";
import { MsgSendRequestTransferFt } from "./types/nftvault/nftvault/tx";
import { MsgSendRequestTransferNft } from "./types/nftvault/nftvault/tx";
import { MsgRequestTransfer } from "./types/nftvault/nftvault/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nftvault.nftvault.MsgLocalExecution", MsgLocalExecution],
    ["/nftvault.nftvault.MsgSendRequestTransferFt", MsgSendRequestTransferFt],
    ["/nftvault.nftvault.MsgSendRequestTransferNft", MsgSendRequestTransferNft],
    ["/nftvault.nftvault.MsgRequestTransfer", MsgRequestTransfer],
    
];

export { msgTypes }