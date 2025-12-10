import {SocketEventInterface} from "./SocketEventInterface";
import {PlayerHand} from "../../../Objects/PlayerHand";

export class TableHandUpdateEvent extends SocketEventInterface{
    constructor(data) {
        data = data ? data.table_data : null
        data = data ? data.table_hand : null
        super({
            hand: data ?? [],
        })
    }

    getHand(){
        return new PlayerHand(this.event.hand)
    }
}