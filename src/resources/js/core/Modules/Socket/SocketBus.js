import {SocketActionInterface} from "./Actions/SocketActionInterface";

export class SocketBus {

    messages = [SocketActionInterface];

    constructor(state){
        this.messages = [];
        this.state = state;
    }

    produce(message){
        this.messages.push(message)
    };

    readLastMessages() {
        let messages = this.messages;
        this.messages = [];

        return messages
    }

}