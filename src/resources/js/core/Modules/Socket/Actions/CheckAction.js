import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class CheckAction extends SocketActionInterface
{
    constructor(){
        super({
            action: SocketAction.ACTION_ACT,
            playerActionType: 'check',
        })
    }
}