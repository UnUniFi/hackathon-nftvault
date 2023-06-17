import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRequestTransfer } from "./types/nftvault/nftvault/tx";
import { MsgLocalExecution } from "./types/nftvault/nftvault/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nftvault.nftvault.MsgRequestTransfer", MsgRequestTransfer],
    ["/nftvault.nftvault.MsgLocalExecution", MsgLocalExecution],
    
];

export { msgTypes }