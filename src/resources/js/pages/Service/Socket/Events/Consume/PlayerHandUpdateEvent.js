import {SocketEventInterface} from "./SocketEventInterface";
import {PlayerHand} from "../../../Objects/PlayerHand";

export class PlayerHandUpdateEvent extends SocketEventInterface{
    constructor(data) {
        data = data ? data.player : null
        super({
            hand: data ? data.hand : [],
        })
    }

    getHand(){
        return new PlayerHand(this.event.hand)
    }
}