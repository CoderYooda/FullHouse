<template>
    <ChangeNameModal/>
    <div class="boxed">
        <div class="avatar_guard">
            <img class="player_avatar" v-bind:src="player.pic">
        </div>
        <div class="player_name">{{player.first_name}} {{player.last_name}}</div>
        <div class="public_name_title">Игровой никнейм</div>
        <div class="player_login">{{player.public_name}}</div>
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
            this.$store.state.ui._modal_change_player_name = true
        }
    },
    computed:{
        ...mapGetters('auth', ['GetPlayer']),
        player() {
            return this.GetPlayer();
        },
        user() {
            return this.User;
        }
    },
    mounted() {
        alert(11);
        this.GetPlayer();
        console.log(this.user.pic)
    },
}
</script>

<style>

</style>
