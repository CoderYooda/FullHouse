import {SocketEventInterface} from "./SocketEventInterface";

export class BankUpdateEvent extends SocketEventInterface{
    constructor(data) {
        data = data ? data.table_data.table_bank : null
        super({
            stakes: data ? data.table_stakes : [],
        })
    }

    getStakes(){
        return this.event.stakes
    }
}