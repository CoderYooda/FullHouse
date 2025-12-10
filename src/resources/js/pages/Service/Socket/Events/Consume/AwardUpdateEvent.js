import {SocketEventInterface} from "./SocketEventInterface";

export class AwardUpdateEvent extends SocketEventInterface{
    constructor(data) {
        super({
            awards: data ? data.awards : [],
        })
    }

    getAwards(){
        return this.event.awards
    }
}