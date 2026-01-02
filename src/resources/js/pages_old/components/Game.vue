<template >
    <div class="table_container">
        <div class="floating_button">
            <router-link to="/" class="link"><span class="icon icon_none"></span><span class="link__title">В лобби</span></router-link>
        </div>
        <div class="table">
            <div class="table_bg">
                <div class="border_layer">
                    <div class="canvas_layer canvas_bg"></div>
                    <div class="canvas_layer canvas_layer_img"></div>
                    <div class="canvas_layer canvas_dash"></div>
                </div>
            </div>
            <div class="table_info">
                <div class="table_header">
                   123
                </div>
                <div class="table_logo"></div>
            </div>
            <div class="table_cards_container">
                <TableCards :ref="setTableCards"/>
            </div>
            <div class="table_stake_container">
                <Bank/>
            </div>
            <Seat v-bind:seat="0"/>
            <Seat v-bind:seat="1"/>
            <Seat v-bind:seat="2"/>
            <Seat v-bind:seat="3"/>
            <Seat v-bind:seat="4"/>
        </div>
        <Actions/>

    </div>
    <Socket v-if="isLoaded" :uuid="this.$props.uuid"/>
</template>

<script>
import Player from "./SeatModule/Seat/Player.vue";
import Card from "./Card.vue";
import TableCards from "./TableCards.vue";
import Actions from "./Actions.vue";
import DevelopPanel from "./DevelopPanel.vue";
import SeatModal from "./Game/SeatModal.vue";
import Socket from "../Service/Socket/Socket.vue";
import Seat from "./SeatModule/Seat.vue";
import Bank from "./Bank.vue";
import {watch} from "vue";
import {PlayerUpdateEvent} from "../Service/Socket/Events/Consume/PlayerUpdateEvent";
import {AwardUpdateEvent} from "../Service/Socket/Events/Consume/AwardUpdateEvent";
import useEventsBus from "../Service/Socket/EventBus";
const { bus } = useEventsBus()
import Sound from "../Service/Sound";

export default {
    components: {Bank, Seat, Socket, SeatModal, DevelopPanel, TableCards, Card, Player, Actions},
    props: ['uuid'],
    data: function () {
        return {
        }
    },
    methods:{
        setTableCards(ref) {
            if (ref) {
                this.tableCards = ref
            }
        },
        getPlayerByID(id){
            for (let i = 0; i < this.players.length; i++) {
                if (this.players[i].seat.player && this.players[i].seat.player.id === id) {
                    return this.players[i]
                }
            }
        },
        eventHandler(event){
            // console.log(event.getAwards())
        }
    },
    mounted() {
        watch(()=>bus.value.get('AwardUpdate'), (val) => {
            const [event] = val ?? []
            this.eventHandler(new AwardUpdateEvent().from(event))
        })
        // alert(Telegram.WebApp.themeParams.backgroundColor())
    },
    computed: {
        isLoaded(){
            return this.$store.state.auth._authenticated === true
        },
        // stakes(){
        //     return this.$store.state.table._stakes
        // },
    },

}
</script>

<style>
.table_container{
    position: relative;
    .floating_button{
        position: absolute;
        left: 0;
        margin: 10px;
    }
    .table {
        align-items: center;
        display: flex;
        justify-content: center;
        margin: auto;
        position: relative;
        .players {
            position: absolute;
            height: 488px;
            width: 296px;

        }
        .table_bg{
            background-image: url(/public/img/table_bg.png);
            height: 488px;
            width: 296px;
            border-radius: 130px;
            margin: auto;
            position: relative;
            box-shadow: inset 0 0 2px 2px rgba(61, 109, 168, 0.16), 0 0 14px 7px rgba(0, 0, 0, 0.25);
            .border_layer {
                height: 458px;
                width: 266px;
                position: absolute;
                top: 15px;
                left: 15px;
                border-radius: 121px;
                background: radial-gradient(#DAB765, #C8A24B);
                box-shadow: inset 0 0 4px 2px #B77F3D;
            }
            .canvas_layer{
                height: 446px;
                width: 254px;
                position: absolute;
                top: 6px;
                left: 6px;
                border-radius: 117px;
                &.canvas_bg{
                    background: radial-gradient(#2C8FC6, #1a4f7f);
                    box-shadow: inset 0 0 9.2px 4px #0D2439;
                }
                &.canvas_layer_img{
                    background: url(/public/img/table_canvas.png);
                    background-size: 25.5%;
                    opacity: 0.18;
                    background-blend-mode: overlay;
                }
                &.canvas_dash{
                    border: 2px dashed #9aa8b042;
                    height: 404px;
                    width: 212px;
                    top: 26px;
                    left: 26px;
                }
            }
        }
        .table_info{
            position: absolute;
            top: 152px;
            margin: auto;
            display: flex;
            flex-direction: column;
            .table_header{
                font-size: 11px;
                color: #194B7A;
                text-align: center;
                margin-bottom: 3px;
            }
            .table_logo{
                height: 18px;
                width: 136px;
                background-image: url(/public/img/tele_holdem.png);
                background-repeat: no-repeat;
                background-size: 100%;
                opacity: 0.5;
                margin: auto;
            }
        }
        .table_cards_container{
            position: absolute;
            top: 191px;

        }
        .table_stake_container {
            position: absolute;
            top: 262px;
            height: 40px;
            width: calc(100% - 110px);
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 4px;
        }
    }

}
</style>