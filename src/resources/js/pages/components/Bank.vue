<template>
    <div v-for="stake in stakes">
        <div class="stake">
            <div class="coin"></div>
            <div class="value">{{stake.amount}}</div>
        </div>
    </div>
</template>

<script>

import useEventsBus from "../Service/Socket/EventBus";
import {watch} from "vue";
import {BankUpdateEvent} from "../Service/Socket/Events/Consume/BankUpdateEvent";

const { bus } = useEventsBus()

export default {
    data: function () {
        return {
            stakes:[]
        }
    },
    mounted() {
        watch(()=>bus.value.get('BankUpdate'), (val) => {
            const [event] = val ?? []
            this.eventHandler(new BankUpdateEvent().from(event))
        })
    },
    methods:{
        addStake(stake){
            if (this.stakes.length >= 5) {
                return
            }
            this.stakes.push(stake);
        },
        clearStakes(){
            this.stakes = [];
        },
        eventHandler(event){
            this.stakes = event.getStakes()
        }
    },
    computed:{
        // stakes(){
        //     return this.$store.state.table._stakes
        // }
    },
    watch: {
        // "stakes"(newStakes, oldStake) {
        //     if (newStakes.length){
        //         setTimeout(()=> {
        //             for (let i = 0; i < newStakes.length; i++) {
        //                 if (newStakes[i] !== undefined) {
        //                     for (let y = 0; y < newStakes[i].win_hands.length; i++) {
        //                         let winHand = newStakes[i].win_hands[y]
        //                         this.$parent.tableCards.winState(winHand.InSolution, winHand.InWin)
        //
        //                         this.$parent.players.forEach((player) => {
        //                             if(player.seat.player && player.seat.player.id === winHand.Player.ID){
        //                                 player.winState(winHand.InSolution, winHand.InWin)
        //                             } else {
        //                                 player.winState([], [])
        //                             }
        //                         })
        //
        //                         // let player = this.$parent.getPlayerByID(winHand.Player.ID)
        //                     }
        //                 }
        //             }
        //         }, 500)
        //     }
        // }
    },
}

</script>

<style scoped>
.stake{
    .coin {
        background-image: url(/public/img/coin.svg);
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: center;
        margin: auto;
    }
    .value {
        color: #fff;
        padding: 0 5px;
        background: rgba(0, 0, 0, 0.2784313725);
        font-size: 11px;
        font-weight: 500;
        margin-top: -5px;
        border-radius: 3px;
    }
}
</style>