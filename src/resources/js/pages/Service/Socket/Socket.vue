<template>
</template>

<script>


import {Socket} from "../../../core/Modules/Socket/Socket";
import {SocketConsumerHandler} from "./SocketConsumerHandler";
import {unset} from "lodash/object";

export default {
    data: function () {
        return {
            socket: null,
            senderInterval: null,
        }
    },
    methods:{
        produceMessages(){
            if (this.$store.state.state.socketBus.messages.length){
                let messages = this.$store.state.state.socketBus.readLastMessages()
                messages.forEach((messageObject) => {
                    this.socket.send(messageObject.message)
                })
            }
        },
        closeHandler(){
            this.$router.push({ name: 'main' })
        }
    },
    mounted() {
        unset(this.socket)
        this.socket = new Socket(
            this.$attrs.uuid,
            this.$store.state.auth._user.token,
            this.$store.state.state.socketBus,
        )

        this.socket.connect()

        let consumeHandler = new SocketConsumerHandler()
        this.socket.connection.onmessage = (e) => {
            let data = JSON.parse(e.data);
            consumeHandler.handle(data)
        };

        this.senderInterval = setInterval(this.produceMessages, 50)
    },
    beforeUnmount() {
        console.log("unmounting")
        clearInterval(this.senderInterval);

        this.socket.close()
    }
}
</script>
