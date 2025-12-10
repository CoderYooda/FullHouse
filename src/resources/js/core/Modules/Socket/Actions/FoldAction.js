import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class FoldAction extends SocketActionInterface
{
    constructor(){
        super({
            action: SocketAction.ACTION_ACT,
            playerActionType: 'fold',
        })
    }
}