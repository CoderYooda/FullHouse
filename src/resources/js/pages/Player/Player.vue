<template>
<div class="avatar_guard">
    <img class="player_avatar" v-bind:src="user.pic">
</div>
    <div class="player_name">{{user.first_name}} {{user.last_name}}</div>
    <div class="player_login">{{user.login}}</div>
</template>

<script>
import LogoutButton from "../components/LogoutButton.vue";
import { mapGetters } from 'vuex';

export default {
    components: {LogoutButton},
    data: function () {
        return {
            login: null,
            password: null,
        }
    },
    methods:{

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
