<template>
    <ChangeNameModal/>
    <div class="boxed">
        <div class="avatar_guard">
            <img class="player_avatar" v-bind:src="user.pic">
        </div>
        <div class="player_name">{{user.first_name}} {{user.last_name}}</div>
        <div class="public_name_title">Игровой никнейм</div>
        <div class="player_login">{{user.public_name}}</div>
        <div class="change_name_button"><button @click="openChangeNameModal">Изменить никнейм</button></div>

        <Tournament/>
    </div>

</template>

<script>
import LogoutButton from "../components/LogoutButton.vue";
import { mapGetters } from 'vuex';
import ChangeNameModal from '../components/ChangeNameModal.vue';
import Tournament from '../components/Player/Tournament.vue';

export default {
    components: { Tournament, ChangeNameModal, LogoutButton},
    data: function () {
        return {
            login: null,
            password: null,
        }
    },
    methods:{
        openChangeNameModal(){
            this.$store.state.state._change_name_modal.visible = true
        }
    },
    computed:{
        ...mapGetters('auth', ['User']),
        TelegramData() {
            return window.Telegram ?? "null";
        },
        user() {
            return this.User;
        }
    },
    mounted() {
        console.log(this.user.pic)
    },
}
</script>

<style>

</style>
