
import {SocketBus} from "./SocketBus";
import SocketAction from "./Enum/SocketAction";

export class Socket {
    server = null

    /** @var {SocketBus} socketBus */
    socketBus = null

    constructor(session_uuid, token, socketBus){
        this.session_uuid = session_uuid;
        this.token = token;
        this.connection = null;
        this.socketBus = socketBus;
        // this.closeHandler = closeHandler;


    }

    connect(){
        let req = {
            'token': this.token,
            'session_uuid': this.session_uuid,
        }
        const params = new URLSearchParams(req)

        this.connection = new WebSocket(
            "wss://" + window.location.host + "/ws?" + params.toString(),
        );

        this.connection.onopen = () => {
            let req = {
                action: SocketAction.ACTION_JOIN,
            }
            this.send(req)
        };

        this.connection.onclose = () => {
            // let req = {
            //     action: SocketAction.ACTION_LEAVE,
            // }
            // this.send(req)
            // setTimeout(() => {
            //     window.location.href = '/game/play'
            // }, 2500)
            // this.closeHandler()
            console.log('Connection Closed')
        };
    }
    close(){
        this.connection.close()
    }

    send(data) {
        this.connection.send(JSON.stringify(data));
    };
}