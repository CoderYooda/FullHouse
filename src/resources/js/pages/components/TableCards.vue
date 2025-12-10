<template>
    <div class="combination_container">
        <div class="combination" v-bind:class = "combination_visible?'visible':''">{{ combination }}</div>
    </div>
    <div class="cards_holder">
        <Card :ref="(el) => {setCardRef(el, 0)}" />
        <Card :ref="(el) => {setCardRef(el, 1)}" />
        <Card :ref="(el) => {setCardRef(el, 2)}" />
        <Card :ref="(el) => {setCardRef(el, 3)}" />
        <Card :ref="(el) => {setCardRef(el, 4)}" />
    </div>
</template>

<script>
import Card from "./Card.vue";
import {mapGetters} from "vuex";
import useEventsBus from "../Service/Socket/EventBus";
import {watch} from "vue";
import {BankUpdateEvent} from "../Service/Socket/Events/Consume/BankUpdateEvent";
import {TableHandUpdateEvent} from "../Service/Socket/Events/Consume/TableHandUpdateEvent";
import {PlayerHand} from "../Service/Objects/PlayerHand";
import {AwardUpdateEvent} from "../Service/Socket/Events/Consume/AwardUpdateEvent";
import Sound from "../Service/Sound";

const { bus } = useEventsBus()

export default {
    components: {Card},
    data: function () {
        return {
            hand: null,
            cards: [],
            combination: '',
            combination_visible: false,
        }
    },
    mounted() {
        watch(()=>bus.value.get('TableHandUpdate'), (val) => {
            const [event] = val ?? []
            this.eventHandler(new TableHandUpdateEvent().from(event))
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
                in_solution.indexOf(i) !== -1 ?
                    this.cards[i].setInSolution(true) :
                    this.cards[i].setInOutOfSolution(true)
            }
            for (let i = 0; i < this.cards.length; i++) {
                // console.log('set in win 1', in_win.indexOf(i) !== -1)
                if (in_win.indexOf(i) !== -1) {
                    this.cards[i].setInWin(true)
                }
            }
        },
        setHand(hand) {
            switch (hand.cards.length) {
                case 3:
                    Sound.play('cards');
                    break
                case 4:
                    Sound.play('one_card');
                    break
                case 5:
                    Sound.play('one_card');
                    break
            }

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
        // clearHand() {
        //     if (this.cards.length){
        //         for (let i = 0; i < this.cards.length; i++) {
        //             if (this.cards[i]){
        //                 this.cards[i].clear();
        //             }
        //         }
        //     }
        // },
        eventHandler(event){
            this.hand = event.getHand()
            if (this.hand !== null && this.hand.cards.length >= 3){
                this.setHand(this.hand)
                return
            }
            this.combination_visible = false
            this.hideHand()
        },
        awardEventHandler(event){
            event.getAwards().forEach(award => {
                award.win_hands.forEach(winHand => {
                    this.combination = winHand.combination
                    this.combination_visible = true
                    Sound.play('win');
                    this.winState(
                        winHand.in_solution,
                        winHand.in_win,
                    )
                })

            })
        }
    },
    computed:{
        ...mapGetters('table', ['TABLE_HAND']),

        hasVisibleCards(){
            return this.cards.filter((card) => !card.hidden).length
        },
        tableHand(){
            return this.$store.state.table._table_hand
        },

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
    //
    // }
}

</script>

<style scoped>
.combination_container{
    position: absolute;
    top: -52px;
    width: 100%;
    .combination{
        text-align: center;
        font-size: 23px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 800;
        width: -moz-fit-content;
        width: fit-content;
        margin: 0 auto;
        background: rgb(119 249 60 / 63%);
        padding: 2px 60px;
        border-radius: 6px;
        opacity: 0;
        scale: 2;
        transition: 0.2s;
        &.visible{
            opacity: 1;
            scale: 1;
            padding: 2px 10px;
        }
    }
}

.cards_holder {
    height: 62px;
    width: 212px;
    background: rgba(18, 53, 90, 0.47);
    border-radius: 3px;
    padding: 4px;
    position: relative;
    &.hidden{
        opacity: 0;
    }
    .card:nth-child(n + 1) {
        left: 4px;
    }
    .card:nth-child(n + 2) {
        left: 47px;
    }
    .card:nth-child(n + 3) {
        left: 90px;
    }
    .card:nth-child(n + 4) {
        left: 133px;
    }
    .card:nth-child(n + 5) {
        left: 176px;
    }
}
</style>