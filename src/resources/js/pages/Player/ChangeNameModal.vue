<template>
    <div class="seat-window modal"  v-if="visible">
        <div class="window">
            <div class="body">
                <span style="text-align: center;width: 100%; display: block;">Публичное имя для рейтинга</span>
                <input v-model="player.public_name" name="public_name">
                <button class="btn primary seat_btn" @click="storePublicName">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

    export default {
        data: function () {
            return {
                credits:0,
            }
        },
        mounted() {

        },
        methods: {
            ...mapActions('auth', ['UpdateName']),
            seat() {
                this.$store.state.ui._modal_change_player_name = false
            },
            storePublicName(){
                this.UpdateName(this.player.public_name).then((result) => {
                    this.$store.state.ui._modal_change_player_name = false
                })
            },
            closeModal(){
                this.$store.state.ui._modal_change_player_name = false
            }
        },
        computed: {
            ...mapGetters('auth', ['Player']),
            player() {
                return this.Player;
            },
            visible () {
                return this.$store.state.ui._modal_change_player_name
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
        overflow: hidden;
        background: linear-gradient(180deg, #292931, #18171D);
        border-radius: 20px;
        padding: 20px;
        input{
            margin: 20px auto 20px;
            display: block;
            background: #18171C;
            border: 1px solid #4B4855;
            border-radius: 4px;
            color: #fff;
            padding: 10px;
            font-size: 20px;
            text-align: center;
        }
        button{
            background: #EDB258;
            border: 0;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 0 auto;
            display: block;
        }
        .head{
            height: 20px;
        }
        .body{
            padding: 10px;

        }
    }
}
</style>
