export class SocketEventInterface {
    event = null

    constructor(message){
        this.event = message;
    }

    from(event){
        this.event = event.event

        return this
    }
}