<template>
    <div v-if="tournaments">
        <div v-for="tournament in tournaments" class="tournament">
            <div class="background">
                <div class="title">
                    {{ tournament.title }}
                </div>
                <p class="descr">
                    Стек: {{ tournament.stack }} ({{ tournament.small_blind }}/{{ tournament.big_blind }}/{{ tournament.ante }})<br>
                    Buy-in: {{ tournament.buy_in }}₽<br>
                    Re-Entry: {{ tournament.re_entry }}₽<br>
                    Add-on: {{ tournament.add_on }}₽<br>
                    <br>
                    Структура турнира:<br>
                    ➡️Уровни: {{ tournament.levels_start }} - {{ tournament.levels_end }} мин<br>
                    ➡️Поздняя регистрация: до {{ tournament.late_registration }} <br>
                </p>
                <button @click="joinTournament(tournament.id)" v-if="!tournament.participant" class="butt">Записаться</button>
                <div v-if="tournament.participant" class="butt" style="text-align: center">Вы записаны, ждем вас на игру!</div>
                <button @click="leaveTournament(tournament.id)" v-if="tournament.participant" class="butt">Отменить запись</button>
            </div>
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
                        url: '/tournament/get',
                        // headers:{
                        //     Authorization:'Bearer '+localStorage.getItem('_token'),
                        // },
                    });
                    this.tournaments = data.data

                    return true;
                } catch (error) {
                    return false;
                }
            },

            async joinTournament(id){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/tournament/'+id+'/join',
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
                        url: '/tournament/'+id+'/leave',
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
            ...mapGetters('auth', ['User']),
            user() {
                return this.User;
            },
            visible () {
                return this.$store.state.state._change_name_modal.visible
            }
        }
    }
</script>

<style scoped>

</style>
