<template>
    <div class="player">
        <Player v-bind:seat="this.$attrs.seat" />
        <div @click="seatAction" class="seat" v-if="seatFree">
            <span>Сесть</span>
        </div>
        <div class="seat reserved" v-if="seatReserved">
            <span>Зарезервировано {{getReservedSeconds}}</span>
        </div>
    </div>
</template>

<script>
    import Card from "./../Card.vue";
    import {ReserveAction} from "../../../core/Modules/Socket/Actions/ReserveAction";
    import useEventsBus from '../../Service/Socket/EventBus';
    import {watch} from "vue";
    import Player from "./Seat/Player.vue";

    const { bus } = useEventsBus()


    export default {

        components: {Player, Card},

        // props: {
        //     parent: {
        //         type: Object as ()=> Game
        //     },
        // },
        data: function () {
            return {
                index:'',
                status:'',
                reserved_time:0,
            }
        },

        mounted() {
            watch(()=>bus.value.get('SeatUpdate_' + this.$attrs.seat), (val) => {
                const [data] = val ?? []
                this.eventHandler(data.event)
            })
        },
        computed: {
            seatActive() {
                return this.status === "active"
            },
            seatReserved() {
                return this.status === "reserved"
            },
            seatFree() {
                return this.status === "free"
            },
            getReservedSeconds() {
                return this.reserved_time - (Date.now() / 1000)
            },
        },
        methods: {
            seatAction(){
                let reserveAction = new ReserveAction(
                    this.$attrs.seat,
                )
                this.$store.state.state.socketBus.produce(reserveAction)

                this.$store.state.state._seat_modal.visible = true
                this.$store.state.state._seat_modal.seat = this.$attrs.seat
            },
            eventHandler(event){
                this.status = event.status
            }
        },
    }
</script>

<style scoped>
.player {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: end;
    position: absolute;
    row-gap: 2px;
    &[seat="0"] {
        left: 202px;
        top: 70px;
        .seat{
            margin-left: 60px;
        }
    }
    &[seat="1"]{
        left: 202px;
        top: 300px;
        .seat{
            margin-left: 60px;
        }
    }
    &[seat="2"]{
        left: 90px;
        top: 445px;
        .seat{
            margin-left: 22px;
        }
    }
    &[seat="3"]{
        left: -50px;
        top: 300px;
        .seat{
            margin-left: 22px;
        }
    }
    &[seat="4"]{
        left: -50px;
        top: 70px;
        .seat{
            margin-left: 22px;
        }
    }
    .seat {
        width: 60px;
        height: 60px;
        background: rgba(57, 53, 53, 0.7294117647);
        border-radius: 50%;
        border: 2px solid #415679;
        color: #fff;
        font-weight: bold;
        font-size: 10px;
        display: flex;
        align-items: center;
        text-align: center;
        & > span {
            width: 100%;
        }
    }
}
</style>