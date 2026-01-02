<template>
    <div class="seat-window modal" v-if="visible">
        <div class="window">
<!--            <div class="head">-->
<!--                <div class="close"></div>-->
<!--            </div>-->
            <div class="body">
                <span>Выберите кол-во фишек для посадки</span>
                <div class="selected_credits">{{ credits }}</div>
                <RiseSlider
                    v-bind:min="min"
                    v-bind:max="max"
                    v-bind:value="credits"
                    v-bind:step="step"
                    v-model:setResult = result
                />
                <button class="btn primary seat_btn" @click="seat">Занять место</button>
            </div>
        </div>
    </div>
</template>

<script>
    import RiseSlider from "../RiseSlider.vue";
    import {SeatAction} from "../../../core/Modules/Socket/Actions/SeatAction";

    export default {
        components: {RiseSlider},
        data: function () {
            return {
                credits:0,
            }
        },
        mounted() {
            this.computeMid();
        },
        methods: {
            result(val){
                this.credits = parseInt(val)
            },
            seat() {
                let seatAction = new SeatAction(
                    this.$store.state.state._seat_modal.seat,
                    this.credits,
                )

                this.$store.state.state.socketBus.produce(seatAction)
                this.$store.state.state._seat_modal.visible = false
                this.computeMid()
            },
            closeModal(){
                this.$store.state.state._seat_modal.visible = false
            },
            computeMid(){
                this.credits = (this.max - this.min) / 2
                this.credits = Math.round(this.credits / this.step) * this.step
            },
        },
        computed: {
            min () {
                return this.$store.state.state._table_settings.min_buy
            },
            max () {
                return this.$store.state.state._table_settings.max_buy
            },
            step () {
                return 100
            },
            visible () {
                return this.$store.state.state._seat_modal.visible
            }
        }
    }
</script>

<style scoped>
.selected_credits{
    text-align: center;
    font-weight: bold;
    padding: 10px;
}
.seat_btn{
    display: block;
    margin: 10px auto 0;
}
.modal{
    background: #00000030;
    backdrop-filter: blur(2px);
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 999999;
    .window{
        border-radius: 5px;
        overflow: hidden;
        background: #fff;
        .head{
            height: 20px;
        }
        .body{
            padding: 10px;

        }
    }
}
</style>