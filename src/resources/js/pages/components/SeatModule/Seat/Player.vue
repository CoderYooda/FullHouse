<template>
    <div class="player_container" v-bind:class = "isMovedAway?'moved_away':''" v-if="this.name !== null">
        <div class="head_row">
            <div class="avatar"
                 :style="{'--value':getLoadingPercent}"
                 v-bind:class = "loading?'glow':''"
            >
                <div class="roles">
                    <div v-if="this.hasRole('dealer')" class="role">D</div>
                    <div v-if="this.hasRole('sb')" class="role">SB</div>
                    <div v-if="this.hasRole('bb')" class="role">BB</div>
                </div>
                <img v-bind:src="this.pic" :style="{'--value':getLoadingWave}">
            </div>
            <Hand
                v-bind:seat="this.$attrs.seat"
            />
        </div>
        <div class="footer_row">
            <div class="user_name">
                <div class="name">{{this.name}}</div>
                <div class="credits">{{this.credits}}</div>
            </div>
            <div class="user_bet">
                <div class="bet" v-bind:class = "(bet > 0)?'active':''">
                    <div class="coin"></div>
                    <div class="amount">{{ bet }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Howl, Howler} from 'howler';
    import Card from "../../Card.vue";
    // import SocketAction from "../../core/Modules/Socket/Enum/SocketAction";
    import {mapGetters} from "vuex";
    // import Game from "../Game.vue";
    // import {SeatAction} from "../../core/Modules/Socket/Actions/SeatAction";
    import {ReserveAction} from "../../../../core/Modules/Socket/Actions/ReserveAction";
    import useEventsBus from '../../../Service/Socket/EventBus';
    import {watch} from "vue";
    import {PlayerUpdateEvent} from "../../../Service/Socket/Events/Consume/PlayerUpdateEvent";
    import Hand from "./Player/Hand.vue";
    import {AwardUpdateEvent} from "../../../Service/Socket/Events/Consume/AwardUpdateEvent";
    import Sound from "../../../Service/Sound";
    import {PlayerActedUpdateEvent} from "../../../Service/Socket/Events/Consume/PlayerActedUpdateEvent";

    const { bus } = useEventsBus()


    export default {

        components: {Hand, Card},

        // props: {
        //     parent: {
        //         type: Object as ()=> Game
        //     },
        // },
        data: function () {
            return {
                id:null,
                name:null,
                pic:null,
                bet:null,
                credits:0,
                roles:[],
                cards:[],
                status:{
                    type: "active",
                    data: {
                        seconds: 0
                    }
                },
                loading:0,
                loadingWave:0,
            }
        },

        mounted() {
            // Howler.autoUnlock = false;
            // this.sfx.small_bet = new Audio('/public/sounds/small_bet.wav');
            // this.sfx.ticks = new Audio('/public/sounds/ticks.mp3');
            // this.sfx.small_bet = new Howl({
            //     src: ['/public/sounds/small_bet.webm'],
            //     autoplay: true,
            //     sprite: {
            //         blast: [0, 100],
            //         laser: [200, 450],
            //         winner: [6000, 5000]
            //     }
            // });
            // console.log(this.$refs.card1)
            // this.$nextTick(() => {
            //     this.cards.push(this.$refs.cardOne)
            //     this.cards.push(this.$refs.cardTwo)
            // });
            watch(()=>bus.value.get('PlayerUpdate_' + this.$attrs.seat), (val) => {
                const [event] = val ?? []
                this.eventHandler(new PlayerUpdateEvent().from(event))
            })
            watch(()=>bus.value.get('PlayerActed'), (val) => {
                const [event] = val ?? []
                this.playerActedHandler(new PlayerActedUpdateEvent().from(event))
            })
        },
        computed: {
            ...mapGetters('table', ['getPlayersBySeat']),
            getLoadingPercent() {
                return this.loading + '%';
            },
            getLoadingWave() {
                return this.loadingWave + '%';
            },
            playerClass() {
                return "player seat";
            },
            seatLoaded() {
                return this.seat !== undefined
            },
            seatActive() {
                return this.seatLoaded && this.seat.status === "active"
            },
            seatReserved() {
                return this.seatLoaded && this.seat.status === "reserved"
            },
            seatFree() {
                return this.seatLoaded && this.seat.status === "free"
            },
            getReservedSeconds() {
                if (!this.seatLoaded) {
                    return 0
                }

                return this.seat.reserved_time - (Date.now() / 1000)
            },

            isMovedAway(){
                return this.status.type === 'movedAway'
            }
        },
        methods: {
            setCardRef(ref, index){
                this.cards[index] = ref
            },
            winState(in_solution, in_win){
                console.log("in_solution", in_solution)
                for (let i = 0; i < this.cards.length; i++) {

                    console.log("in_solution bool", in_solution.indexOf(i+5))

                    in_solution.indexOf(i+5) !== -1 ?
                        this.cards[i].setInSolution(true) :
                        this.cards[i].setInOutOfSolution(true)
                }
                for (let i = 0; i < this.cards.length; i++) {
                    console.log('set in win 1', in_win.indexOf(i+5) !== -1)
                    if (in_win.indexOf(i+5) !== -1) {
                        this.cards[i].setInWin(true)
                    }
                }
            },
            hasRole(role) {
                return this.roles && this.roles.includes(role)
            },
            makeBet(bet) {
                this.credits -= bet;
                this.bet = bet;
            },
            makeBetOut(bet) {
                this.bet = 0;
            },
            setHand(hand) {
                for (let i = 0; i < hand.cards.length; i++) {
                    if (this.cards[i]) {
                        this.cards[i].set(hand.cards[i]);
                    }
                }
            },
            hideHand() {
                if (this.cards.length) {
                    for (let i = 0; i < this.cards.length; i++) {
                        if (this.cards[i]){
                            this.cards[i].hide();
                        }
                    }
                }
            },
            clearHand() {
                if (this.cards.length) {
                    for (let i = 0; i < this.cards.length; i++) {
                        if (this.cards[i]){
                            this.cards[i].clear();
                        }
                    }
                }
            },
            setLoading(ms){
                this.loading = 0;
                this.loadingWave = 0;
                let interval = ms / 200
                clearInterval(this.loadingInterval)
                this.loadingInterval = setInterval(function (){
                    this.loading += 0.5;
                    if (this.loading % 10 === 0) {
                        this.loadingWave = this.loadingWave > 50 ? 0 : 100
                    }
                    if (this.loading > 50) {
                        // audio.volume = 0;
                        // this.sfx.ticks.play();
                    }
                    // audio.volume++;
                    if (this.loading >= 100) {
                        interval = 0;
                        clearInterval(this.loadingInterval);
                        this.$data.loading = 0;
                        this.loadingWave = 0;
                        // this.sfx.ticks.pause();
                    }
                }.bind(this), interval);
            },
            clearLoading(){
                clearInterval(this.loadingInterval)
                // this.sfx.ticks.pause();
                this.loading = 0
                this.loadingWave = 0;
            },
            seatAction(){
                let reserveAction = new ReserveAction(
                    this.$attrs.seat,
                )
                this.$store.state.state.socketBus.produce(reserveAction)

                this.$store.state.state._seat_modal.visible = true
                this.$store.state.state._seat_modal.seat = this.$attrs.seat
            },
            eventHandler(event){
                this.name = event.getName()
                this.pic = event.getPic()
                this.credits = event.getCredits()
                this.bet = event.getBet()
                this.roles = event.getRoles()
                this.id = event.getId()


                if (event.getStatus() !== null && this.status !== event.getStatus()){
                    this.clearLoading()
                    if (event.getStatus().type === "WaitingAction"){
                        this.setLoading(event.getStatus().data.seconds * 1000)
                    }
                    this.status = event.getStatus()
                }
            },
            playerActedHandler(event){
                let playerAction = event.getPlayerAction()
                if (playerAction != null && playerAction.player_id === this.id) {
                    switch (playerAction.type) {
                        case 'check':
                            Sound.play('check')
                            break
                        case 'fold':
                            Sound.play('fold')
                            break
                        case 'call':
                            Sound.play('call')
                            break
                        case 'rise':
                            Sound.play('rise')
                            break
                    }
                }
            },
        },

        // watch: {
        //     "seat.player.bet"(newBet, oldBet) {
        //         if (newBet !== 0 && newBet > oldBet){
        //             this.sfx.small_bet.currentTime = 0
        //             this.sfx.small_bet.play();
        //         }
        //     },
        //     "seat.player.hand"(newHand, oldHand) {
        //         if (newHand !== null && newHand.cards.length === 2){
        //             this.setHand(newHand)
        //             return;
        //         }
        //         this.hideHand()
        //     },
        //     "seat.player.status"(newStatus, oldStatus) {
        //         if (newStatus != null){
        //             if (newStatus !== oldStatus && newStatus.type === "WaitingAction"){
        //                 this.setLoading(newStatus.seconds * 1000)
        //                 return
        //             }
        //             console.log("CLEAR")
        //             this.clearLoading()
        //         }
        //     }
        // },
    }
</script>

<style scoped>
.player_container {
    &.moved_away{
        opacity: 0.3;
    }

    .head_row {
        display: flex;
        flex-direction: row;
        grid-gap: 4px;
        align-items: end;

        .avatar {
            height: 60px;
            width: 56px;
            border-radius: 6px;
            background: #415679;
            margin-left: 30px;
            background: conic-gradient(#bcfb00 var(--value), #415679 0);
            transition: 0.2s;
            &.glow{
                box-shadow: #bcfb009e 0 0 20px 0;
            }
            .roles {
                position: absolute;
                display: flex;
                top: -15px;
                .role {
                    font-size: 8px;
                    background: #fff;
                    border-radius: 50%;
                    border: 1px solid;
                    text-align: center;
                    width: 13px;
                    height: 13px;
                    line-height: 15px;
                }
            }
            .loading {
                height: 60px;
                width: 60px;
                background: #bcfb00;
            }
            & > img {
                width: 52px;
                height: 56px;
                border-radius: 4px;
                margin: 2px;
                transition: 0.2s;
                box-shadow: 0 0 10px 0px rgb(188, 251, 0, var(--value));
            }
        }

    }
    .footer_row {
        display: flex;
        flex-direction: row;
        grid-gap: 4px;
        line-height: 13px;

        .user_name {
            background: linear-gradient(to right, #00000000, #000000b3);
            color: #fff;
            padding: 1px 5px;
            font-size: 11px;
            width: 76px;
            text-align: right;
            border-radius: 2px;
            text-shadow: 1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000;

            .name {
                color: #FF7815;
                font-weight: 600;
            }

            .credits {

            }
        }
        .user_bet {
            //width: 56px;
            display: flex;
            align-items: end;
            .bet {
                display: flex;
                flex-direction: row;
                background: #00000063;
                border-radius: 4px;
                height: 14px;
                font-size: 11px;
                line-height: 14px;
                padding: 2px 4px;
                color: #fff;
                font-weight: 600;
                opacity: 0;
                transform: translateX(-50px);
                transition:0.1s;
                &.active {
                    opacity: 1;
                    transform: translateX(0px);
                }
                .coin {
                    background-image: url(/public/img/coin.svg);
                    background-size: 14px;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 14px;
                    height: 14px;
                    margin: auto;
                }
            }
        }
    }
    &[seat="0"] {
        left: 202px;
        top: 70px;
        .head_row {
            flex-direction: row-reverse;
            .avatar {
                margin-left: 0;
                margin-right: 30px;
            }
        }
        .footer_row {
            flex-direction: row-reverse;
            .user_name {
                text-align: left;
                background: linear-gradient(to left, #00000000, #000000b3);
            }
        }
        .seat{
            margin-left: 60px;
        }
    }
    &[seat="1"] {
        left: 202px;
        top: 300px;
        .head_row {
            flex-direction: row-reverse;
            .avatar {
                margin-left: 0;
                margin-right: 30px;
            }
        }
        .footer_row {
            flex-direction: row-reverse;
            .user_name {
                text-align: left;
                background: linear-gradient(to left, #00000000, #000000b3);
            }
        }
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
        top: 70px;
        .seat{
            margin-left: 22px;
        }

        //align-items: start;
        //text-align: left;
    }
    &[seat="4"]{
        left: -50px;
        top: 300px;
        .seat{
            margin-left: 22px;
        }

        //align-items: start;
        //text-align: left;
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