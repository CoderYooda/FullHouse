<template>
    <div class="content">
        <ChangeNameModal/>
        <div class="boxed">
            <div class="avatar_guard">
                <img class="player_avatar" v-bind:src="user.pic">
            </div>
            <div class="player_name">{{user.first_name}} {{user.last_name}}</div>
            <div class="public_name_title">Игровой никнейм</div>
            <div class="player_login">{{user.public_name}}</div>
            <div class="change_name_button"><button @click="openChangeNameModal">Изменить никнейм</button></div>
            <div class="module">
<!--                <div class="user-card">-->
<!--                    <div class="card-header">-->
<!--                        <div class="split_container">-->
<!--                            <div class="left">Рейтинг 10992</div>-->
<!--                            <div class="right text-gray">Winter tournament</div>-->
<!--                        </div>-->
<!--                        <div class="progress">-->
<!--                            <div class="filler" style="width: 40%;"></div>-->
<!--                        </div>-->
<!--                        <div class="split_container">-->
<!--                            <div class="left text-gray">-->
<!--                                <span class="player_icon"></span>-->
<!--                                <span>#3 в рейтинге</span>-->
<!--                            </div>-->
<!--                            <div class="right">-->
<!--                                <router-link :to="{ path: '/rating'}"  class="button-link">-->
<!--                                    Таблица рейтинга-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="user-split-card">
                    <div class="user-card" style="margin-bottom: 0">
                        <div class="card-header">
                            ID Профиля
                        </div>
                        <span class="text-gray">{{ user.profile_id }}</span>
                    </div>
                    <div class="user-card" style="margin-bottom: 0">
                        <div class="card-header">
                            Регистрация
                        </div>
                        <span class="text-gray">{{ user.registration_date }}</span>
                    </div>
                </div>

            </div>
            <Tournament/>
        </div>
    </div>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ChangeNameModal from '../pages/Player/ChangeNameModal.vue';
import Tournament from '../pages/Player/Tournament.vue';

export default {
    components: { Tournament, ChangeNameModal},
    data: function () {
        return {
            tournaments: [],
        }
    },
    methods:{
        ...mapActions('auth', ['GetPlayer']),
        ...mapMutations('auth', ['setPlayer']),
        loadPlayerData(){
            this.GetPlayer().then((player) => {
                this.setPlayer({player:player})
            })
        },
        async getTournament (){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/player/tournaments',
                });
                this.tournaments = data.data

                return true;
            } catch (error) {
                return false;
            }
        },
        openChangeNameModal(){
            this.$store.state.ui._modal_change_player_name = true
        }
    },
    computed:{
        ...mapGetters('auth', ['Player']),
        user() {
            return this.Player;
        }
    },
    mounted() {
       this.loadPlayerData();
       this.getTournament();
    },
}
</script>

<style>

</style>
