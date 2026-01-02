<template>
<!--    <div class="row row-sm">-->
<!--        <div class="col-lg-12 ht-lg-100p">-->
<!--            <div class="az-content-label mg-b-5">Игроки</div>-->
<!--            <div v-for="activePlayer in activePlayers" class="card card-dashboard-pageviews mb-2">-->
<!--                <div class="az-list-item">-->
<!--                    <div class="d-flex">-->
<!--                        <div class="az-img-user mr-2"><img v-bind:src="activePlayer.telegram_user.photo_url" alt=""></div>-->
<!--                        <div>-->
<!--                            <h6 class="mg-b-0 tx-inverse no-wrap" style="white-space: nowrap; max-width: 144px">{{ activePlayer.public_name }}</h6>-->
<!--                            <small class="tx-11 tx-gray-500 no-wrap" style="white-space: nowrap;">ID пользователя: id</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="d-flex flex-column">-->
<!--    &lt;!&ndash;                @if($player->pivot->is_arrived)&ndash;&gt;-->
<!--    &lt;!&ndash;                <div class="badge badge-success">Пришел</div>&ndash;&gt;-->
<!--    &lt;!&ndash;                @else&ndash;&gt;-->
<!--    &lt;!&ndash;                <div class="badge badge-danger">Отменена</div>&ndash;&gt;-->
<!--    &lt;!&ndash;                @endif&ndash;&gt;-->
<!--    &lt;!&ndash;                    <div>&ndash;&gt;-->
<!--                        <span>Сегодня в date</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>&lt;!&ndash; list-group-item &ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->
    <div class="row row-sm">
        <div class="col-lg-12 ht-lg-100p">
            <div class="az-content-label mg-b-5">записи на игру</div>
            <div v-for="player in players" class="card card-dashboard-pageviews mb-2 p-2">
                <div class="az-list-item">
                    <div class="d-flex">
                        <div class="az-img-user mr-2"><img v-bind:src="player.telegram_user.photo_url" alt=""></div>
                        <div>
                            <h6 class="mg-b-0 tx-inverse no-wrap" style="white-space: nowrap; max-width: 144px">{{ player.public_name }}</h6>
                            <small class="tx-11 tx-gray-500 no-wrap" style="white-space: nowrap;">ID пользователя: {{ player.id }}</small>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div v-if="player.pivot.is_actual" class="badge badge-success">Актуальна</div>
                        <div v-if="!player.pivot.is_actual" class="badge badge-danger">Отменена</div>
                        <span>{{ new Date(player.pivot.created_at).toLocaleString() }}</span>
                    </div>
                </div>
            </div><!-- list-group-item -->
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function () {
        return {
            players:[],
        }
    },
    mounted() {
        this.test().then((data) => {
            this.players = data.players
            console.log(this.players);
        })
    },
    methods: {
        temp(){

        },
        async test(){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/admin/tournaments/'+ document.getElementById('tournament').dataset.tournament_id +'/players',
                });

                return data;
            } catch (error) {

                return false;
            }
        },
    },
    computed: {
        activePlayers(){
            return this.players.filter(function(player) {
                return player.pivot.is_arrived == true;
            });
        }
    }
}
</script>

<style scoped>

</style>
