import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendRequestTransfer } from "./types/nftvault/nftvault/tx";
import { MsgLocalExecution } from "./types/nftvault/nftvault/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nftvault.nftvault.MsgSendRequestTransfer", MsgSendRequestTransfer],
    ["/nftvault.nftvault.MsgLocalExecution", MsgLocalExecution],
    
];

export { msgTypes }