import {SocketEventInterface} from "./SocketEventInterface";

export class PlayerActedUpdateEvent extends SocketEventInterface{
    constructor(data) {
        super({
            player_action: data ? data.player_acted : null,
        })
    }

    getPlayerAction(){
        return this.event.player_action
    }
}