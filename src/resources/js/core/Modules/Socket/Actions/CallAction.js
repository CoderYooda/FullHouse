import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class CallAction extends SocketActionInterface
{
    constructor(){
        super({
            action: SocketAction.ACTION_ACT,
            playerActionType: 'call',
        })
    }
}