<script>

import Card from "../../../Card.vue";

import {watch} from "vue";
import useEventsBus from "../../../../Service/Socket/EventBus";
import {PlayerHandUpdateEvent} from "../../../../Service/Socket/Events/Consume/PlayerHandUpdateEvent";
import {AwardUpdateEvent} from "../../../../Service/Socket/Events/Consume/AwardUpdateEvent";

const { bus } = useEventsBus()

export default {
    components: {Card},
    data: function () {
        return {
            hand: null,
            cards: [],
            cardsData: [],
        }
    },
    mounted() {
        watch(()=>bus.value.get('PlayerHandUpdate_' + this.$attrs.seat), (val) => {
            const [event] = val ?? []
            this.eventHandler(new PlayerHandUpdateEvent().from(event))
        })
        watch(()=>bus.value.get('AwardUpdate'), (val) => {
            const [event] = val ?? []
            this.awardEventHandler(new AwardUpdateEvent().from(event))
        })
    },
    methods:{
        setCardRef(el, index) {
            if (el) {
                this.cards[index] = el
            }
        },
        winState(in_solution, in_win){
            for (let i = 0; i < this.cards.length; i++) {
                in_solution.indexOf(i + 5) !== -1 ?
                    this.cards[i].setInSolution(true) :
                    this.cards[i].setInOutOfSolution(true)
            }
            for (let i = 0; i < this.cards.length; i++) {
                if (in_win.indexOf(i + 5) !== -1) {
                    this.cards[i].setInWin(true)
                }
            }
        },
        setHand(hand) {
            for (let i = 0; i < hand.cards.length; i++) {
                this.cards[i].set(hand.cards[i]);
            }
        },
        hideHand() {
            if (this.cards.length){
                for (let i = 0; i < this.cards.length; i++) {
                    if (this.cards[i]){
                        this.cards[i].hide();
                    }
                }
            }
        },
        clearHand() {
            if (this.cards.length){
                for (let i = 0; i < this.cards.length; i++) {
                    if (this.cards[i]){
                        this.cards[i].clear();
                    }
                }
            }
        },
        // markInSolution(items){
        //     for (let i = 0; i < this.cards.length; i++) {
        //         if (items.includes(i)){
        //             this.cards[i].inSolution();
        //         } else {
        //             this.cards[i].inOutOfSolution();
        //         }
        //     }
        // }
        eventHandler(event){
            this.cardsData = event.getHand()
            this.setHand(this.cardsData)
        },
        awardEventHandler(event){
            event.getAwards().forEach(award => {
                award.win_hands.forEach(winHand => {
                    if (winHand.player_id !== this.$parent.id){

                        for (let i = 0; i < this.cards.length; i++) {
                            this.cards[i].setInOutOfSolution(true)
                        }

                        return
                    }
                    this.winState(
                        winHand.in_solution,
                        winHand.in_win,
                    )
                })

            })
        }
    },
    computed:{
        // ...mapGetters('table', ['TABLE_HAND']),
        //
        // hasVisibleCards(){
        //     return this.cards.filter((card) => !card.hidden).length
        // },
        // tableHand(){
        //     return this.$store.state.table._table_hand
        // },

    },
    // watch:{
    //     "tableHand"(newHand, oldHand) {
    //         if (newHand !== null && newHand.cards.length >= 3){
    //             console.log('SET HANDS')
    //             this.setHand(newHand)
    //             return;
    //         }
    //         this.hideHand()
    //     },
    // }
}

</script>

<template>
    <div class="cards">
        <Card :ref="(el) => {setCardRef(el, 0)}" />
        <Card :ref="(el) => {setCardRef(el, 1)}" />
    </div>
</template>

<style scoped>
.cards {
    width: 56px;
    height: 41px;
    display: flex;
    column-gap: 2px;
    .card {
        font-size: 20px;
        height: 41px;
        width: 27px;
        position: relative;
    }
}
</style>