<template>
    <div class="table_actions">
        <div class="pre_actions" v-if="!isActive">
            <button class="btn primary" :class="isPreActedCall?'active':''" @click="preActionCall">CALL</button>
            <button class="btn primary" :class="isPreActedCallAny?'active':''" @click="preActionCallAny">CALL ANY</button>
            <button class="btn primary" :class="isPreActedCallFold?'active':''" @click="preActionCallFold">CALL \ FOLD</button>
            <button class="btn primary" :class="isPreActedFold?'active':''" @click="preActionFold">FOLD</button>
        </div>
        <div class="actions" v-if="isActive">
            <button v-if="canCheck" class="btn primary" @click="actionCheck">CHECK</button>
            <button v-if="canCall" class="btn primary" @click="actionCall">CALL {{this.betOffer.call_amount}}</button>
            <button class="btn primary" @click="actionFold">FOLD</button>
            <button class="btn primary"  @click="actionRise">RISE {{this.betOffer.rise_amount}}</button>

            <RiseSlider
                v-bind:min="this.betOffer.call_amount + this.betOffer.rise_step"
                v-bind:max="this.betOffer.all_in_amount"
                v-bind:value="this.betOffer.rise_amount"
                v-bind:step="this.betOffer.rise_step"
                v-model:setResult = result
            />
        </div>
    </div>
</template>

<script>
    import RiseSlider from "./RiseSlider.vue";
    import {mapGetters} from "vuex";
    import {CallAction} from "../../core/Modules/Socket/Actions/CallAction";
    import {CheckAction} from "../../core/Modules/Socket/Actions/CheckAction";
    import {RiseAction} from "../../core/Modules/Socket/Actions/RiseAction";
    import {FoldAction} from "../../core/Modules/Socket/Actions/FoldAction";
    import useEventsBus from "../Service/Socket/EventBus";
    import {watch} from "vue";
    import {PlayerUpdateEvent} from "../Service/Socket/Events/Consume/PlayerUpdateEvent";
    import {BetOfferUpdateEvent} from "../Service/Socket/Events/Consume/BetOfferUpdateEvent";

    const PRE_ACTION_CALL = 'pre_call';
    const PRE_ACTION_CALL_ANY = 'pre_call_any';
    const PRE_ACTION_CALL_FOLD = 'pre_call_fold';
    const PRE_ACTION_FOLD = 'pre_fold';

    const { bus } = useEventsBus()

    export default {
        components: {RiseSlider},
        PRE_ACTIONS:[
            PRE_ACTION_CALL,
            PRE_ACTION_CALL_ANY,
            PRE_ACTION_CALL_FOLD,
            PRE_ACTION_FOLD,
        ],
        data: function () {
            return {
                betOffer:{
                    all_in_amount:null,
                    bank_amount:null,
                    call_amount:null,
                    can_check:null,
                    rise_amount:null,
                    rise_step:null,
                    waiting_action:null,
                },
                // isActive:false,
                // callAmount: 100,
                riseAmount:0,
                preAction:null,
            }
        },
        mounted() {
            watch(()=>bus.value.get('BetOfferUpdate'), (val) => {
                const [event] = val ?? []
                navigator.vibrate(50);
                this.eventHandler(new BetOfferUpdateEvent().from(event))
            })
        },
        created() {

        },
        methods: {
            result(val){
                this.betOffer.rise_amount = parseInt(val)
            },
            // activate(val){
            //     this.isActive = val;
            // },
            call(action){
                if (this.preAction === action) {
                    action = null;
                }
                navigator.vibrate(50);
                this.preAction = action;
            },
            preActionCall(){
                this.call(PRE_ACTION_CALL)
            },
            preActionCallAny(){
                this.call(PRE_ACTION_CALL_ANY)
            },
            preActionCallFold(){
                this.call(PRE_ACTION_CALL_FOLD)
            },
            preActionFold(){
                this.call(PRE_ACTION_FOLD)
            },
            actionCall(){
                let callAction = new CallAction()
                this.$store.state.state.socketBus.produce(callAction)
                this.betOffer.waiting_action = false
            },
            actionFold(){
                let foldAction = new FoldAction()
                this.$store.state.state.socketBus.produce(foldAction)
                this.betOffer.waiting_action = false
            },
            actionRise(){
                let riseAction = new RiseAction(this.betOffer.rise_amount)
                this.$store.state.state.socketBus.produce(riseAction)
                this.betOffer.waiting_action = false
            },
            actionCheck(){
                let checkAction = new CheckAction()
                this.$store.state.state.socketBus.produce(checkAction)
                this.betOffer.waiting_action = false
            },
            selectRise(val){
                this.riseAmount = 80000 / 100 * val
            },
            eventHandler(event){
                this.betOffer.all_in_amount = event.getAllInAmount(),
                this.betOffer.bank_amount = event.getBankAmount(),
                this.betOffer.call_amount = event.getCallAmount(),
                this.betOffer.can_check = event.getCanCheck(),
                this.betOffer.rise_amount = event.getRizeAmount(),
                this.betOffer.rise_step = event.getRiseStep(),
                this.betOffer.waiting_action = event.getWaitingAction()
            }
        },
        computed: {
            ...mapGetters('table', ['GetSelfSeat']),
            isPreActedCall(){
                return this.preAction === PRE_ACTION_CALL
            },
            isPreActedCallAny(){
                return this.preAction === PRE_ACTION_CALL_ANY
            },
            isPreActedCallFold(){
                return this.preAction === PRE_ACTION_CALL_FOLD
            },
            isPreActedFold(){
                return this.preAction === PRE_ACTION_FOLD
            },
            selfSeat(){
                return this.GetSelfSeat
            },
            isActive(){
                // if (this.selfSeat !== undefined && this.selfSeat.player != null) {
                //     return this.selfSeat.player.status.type === "WaitingAction"
                // }
                return this.betOffer.waiting_action
            },
            callAmount(){
                return this.betOffer.call_amount ?? 0
            },
            riseAmount(){
                return this.betOffer.rise_amount ?? 0
            },
            canCall(){
                return this.betOffer.call_amount > 0
            },
            canCheck(){
                return this.betOffer.can_check === true
            }
        }
    }
</script>

<style scoped>
.table_actions {
    position: relative;
    width: 100%;
    & > div {
        display: flex;
        flex-wrap: wrap;
        -moz-column-gap: 10px;
        column-gap: 10px;
        row-gap: 10px;
        margin: 0 10px;
    }
}
.pre_actions{
    .btn{
        background: #84827a;
        border: 1px solid #a0a0a0;
        &::before{
            content: "";
            position: absolute;
            height: 16px;
            width: 16px;
            background: #fff;
            border: 1px solid #5b5b5b;
            top: 8px;
            left: 8px;
            border-radius: 50%;
        }
        &.active::before{
            background: #85e627;
        }
    }
}
.btn {
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    &.inactive{
        background: #1e1f22;
    }
}
.table_actions {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>