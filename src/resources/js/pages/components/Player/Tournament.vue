<template>
    <div v-if="tournament" class="tournament">
        <div class="background">
            <div class="title">
                {{ tournament.title }}
            </div>
            <p class="descr">
                {{ tournament.description }}
            </p>
            <button @click="joinTournament" v-if="!tournament.participant" class="butt">Записаться</button>
            <div v-if="tournament.participant" class="butt" style="text-align: center">Вы записаны, ждем вас на игру!</div>
            <button @click="leaveTournament" v-if="tournament.participant" class="butt">Отменить запись</button>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

    export default {
        data: function () {
            return {
                tournament:null,
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
                    this.tournament = data.data

                    return true;
                } catch (error) {
                    return false;
                }
            },

            async joinTournament(){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/tournament/join',
                        // headers:{
                        //     Authorization:'Bearer '+localStorage.getItem('_token'),
                        // },
                    });
                    this.tournament.participant = true

                    return true;
                } catch (error) {
                    return false;
                }
            },

            async leaveTournament(){
                try{
                    const { data } = await axios({
                        method: 'POST',
                        url: '/tournament/leave',
                        // headers:{
                        //     Authorization:'Bearer '+localStorage.getItem('_token'),
                        // },
                    });
                    this.tournament.participant = false

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
