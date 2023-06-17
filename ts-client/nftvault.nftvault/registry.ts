import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgLocalExecution } from "./types/nftvault/nftvault/tx";
import { MsgSendRequestTransfer } from "./types/nftvault/nftvault/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nftvault.nftvault.MsgLocalExecution", MsgLocalExecution],
    ["/nftvault.nftvault.MsgSendRequestTransfer", MsgSendRequestTransfer],
    
];

export { msgTypes }