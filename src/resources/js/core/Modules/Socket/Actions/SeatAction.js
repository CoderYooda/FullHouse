import {SocketActionInterface} from "./SocketActionInterface";
import SocketAction from "../Enum/SocketAction";

export class SeatAction extends SocketActionInterface
{
    constructor(seat, credits){
        super({
            action: SocketAction.ACTION_SEAT,
            seat: seat,
            credits: credits,
        })
    }
}