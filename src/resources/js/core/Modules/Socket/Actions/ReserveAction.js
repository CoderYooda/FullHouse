import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class ReserveAction extends SocketActionInterface
{
    constructor(seat){
        super({
            action: SocketAction.ACTION_RESERVE,
            seat: seat,
        })
    }
}