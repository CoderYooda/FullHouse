<template>
    <div class="module">
        <h3>Предстоящие турниры
            <router-link :to="{ path: '/tournaments'}" class="right_button">все</router-link>
        </h3>
    </div>
    <div v-if="tournaments">
        <div v-for="tournament in tournaments" class="tournament">
            <router-link :to="{ path: '/tournaments/' + tournament.id}"  class="my-link-wrapper">

                <div class="background">
                    <div class="title">
                        {{ tournament.title }} <br>{{ tournament.date }} в {{ tournament.at }}
                    </div>
                    <p class="descr">
                        Стек: {{ tournament.stack }} ({{ tournament.small_blind }}/{{ tournament.big_blind }}/{{ tournament.ante }})<br>
                        Buy-in: {{ tournament.buy_in }}₽<br>
                        Re-Entry: {{ tournament.re_entry }}₽<br>
                        Add-on: {{ tournament.add_on }}₽<br>
                    </p>
                    <div class="i_am_player">Я участник</div>
                </div>
            </router-link>
        </div>
    </div>
    <div  class="module" v-if="!tournaments.length">
        <div class="user-card" style="text-align: center">
            В данный момент активных записей нет
        </div>
    </div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex';

    export default {
        data: function () {
            return {
                tournaments:[],
            }
        },
        mounted() {
            this.getTournament().then((result) => {
                if (result) {
                    this.$store.state.loaded = true
                    this.$router.push({ name: 'player' })
                }
            })
        },
        methods: {
            async getTournament (){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/api/tournament/get',
                    });
                    this.tournaments = data.data

                    return true;
                } catch (error) {
                    this.$router.push({ name: 'login' })
                    return false;
                }
            },

            async joinTournament(id){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/api/tournament/'+id+'/join',
                        // headers:{
                        //     Authorization:'Bearer '+localStorage.getItem('_token'),
                        // },
                    });
                    this.tournaments.find(tournament => tournament.id === id).participant = true

                    return true;
                } catch (error) {
                    return false;
                }
            },

            async leaveTournament(id){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/api/tournament/'+id+'/leave',
                        // headers:{
                        //     Authorization:'Bearer '+localStorage.getItem('_token'),
                        // },
                    });
                    this.tournaments.find(tournament => tournament.id === id).participant = false

                    return true;
                } catch (error) {
                    return false;
                }
            }

        },
        computed: {
            ...mapGetters('auth', ['Player']),
            player() {
                return this.Player;
            },
            visible () {
                return this.$store.state.state._change_name_modal.visible
            }
        }
    }
</script>

<style scoped>

</style>
