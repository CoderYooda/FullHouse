import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class RiseAction extends SocketActionInterface
{
    constructor(amount){
        super({
            action: SocketAction.ACTION_ACT,
            playerActionType: 'rise',
            credits: amount,
        })
    }
}