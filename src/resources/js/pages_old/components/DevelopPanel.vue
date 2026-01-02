<template>
    <div class="dev-panel"
         v-bind:class = "isDevelopModeEnabled?'visible':''"
         >
        <div>
            <button @click="table_update_1">table_update_1</button>
            <button @click="table_update_2">table_update_2</button>
            <button @click="table_update_3">table_update_3</button>
        </div>
        <div>
            <button @click="test_sound">sound test 1</button>
            <button @click="test_sound_2">sound test 2</button>
            <button @click="test_sound_3">sound test 3</button>
            <button @click="test_sound_4">sound test 4</button>
        </div>
        <div>
            <button @click="award_update_1">award_update_1</button>
        </div>
        <div>
            <button @click="player_update_1">player_update_1</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {SocketConsumerHandler} from "../Service/Socket/SocketConsumerHandler";
import TableUpdate from "./DevelopPanel/TableUpdate";
import Sound from "./../Service/Sound";
import AwardUpdate from "./DevelopPanel/AwardUpdate";
import PlayersUpdate from "./DevelopPanel/PlayersUpdate";

export default {
    data: function () {
        return {
        }
    },
    methods:{
        test_sound() {
            Sound.play('check')
        },
        test_sound_2() {
            Sound.play('win')
        },
        test_sound_3() {
            Sound.play('rise')
        },
        test_sound_4() {
            Sound.play('fold')
        },
        table_update_1() {
            let sch = new SocketConsumerHandler()
            sch.handle(TableUpdate.table_update_1())
        },
        table_update_2() {
            let sch = new SocketConsumerHandler()
            sch.handle(TableUpdate.table_update_2())
        },
        table_update_3() {
            let sch = new SocketConsumerHandler()
            sch.handle(TableUpdate.table_update_3())
        },
        award_update_1() {
            let sch = new SocketConsumerHandler()
            sch.handle(AwardUpdate.award_update_1())
        },
        player_update_1() {
            let sch = new SocketConsumerHandler()
            sch.handle(PlayersUpdate.update_1())
        },
    },
    computed:{
        ...mapGetters(['DEVELOP_MODE']),

        isDevelopModeEnabled(){
            return this.DEVELOP_MODE === true
        }
    }
}
</script>

<style>
.dev-panel{
    background: #0000003b;
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: 1;
    bottom: -50%;
    display: flex;
    flex-direction: row;
    transition: 0.1s;
    &.visible {
        bottom: 0;
    }
}
</style>