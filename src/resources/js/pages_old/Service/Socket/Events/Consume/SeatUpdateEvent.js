import {SocketEventInterface} from "./SocketEventInterface";

export class SeatUpdateEvent extends SocketEventInterface{
    constructor(seat) {
        super({
            status: seat.status,
        })
    }
}