import {SocketEventInterface} from "./SocketEventInterface";

export class PlayerUpdateEvent extends SocketEventInterface{
    constructor(data) {
        data = data ? data.player : null
        super({
            name: data ? data.name : null,
            pic: data ? data.pic : null,
            credits: data ? data.credits : null,
            bet: data ? data.bet : null,
            status: data ? data.status : null,
            roles: data ? data.roles : [],
            id: data ? data.id : null,
        })
    }

    getName(){
        return this.event.name
    }

    getPic(){
        return this.event.pic
    }

    getCredits(){
        return this.event.credits
    }

    getBet(){
        return this.event.bet
    }

    getStatus(){
        return this.event.status
    }

    getRoles(){
        return this.event.roles
    }

    getId(){
        return this.event.id
    }
}