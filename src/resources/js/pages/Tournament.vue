<template>
    <div class="content">
        <div class="boxed">
            <h2 class="page_h2">{{ tournament.title }} #{{ tournament.id }}</h2>
            <div class="module">
                <div class="tour-timer">Начало {{ tournament.date }} в {{ tournament.at }}</div>
            </div>
            <div>
                <div class="tournament clear clock">
                    <div class="time-fragment">
                        <div class="head">{{ countdown.days }}</div>
                        <div class="descr">дней</div>
                    </div>
                    <div class="dots">:</div>
                    <div class="time-fragment">
                        <div class="head">{{ countdown.hours }}</div>
                        <div class="descr">часов</div>
                    </div>
                    <div class="dots">:</div>
                    <div class="time-fragment">
                        <div class="head">{{ countdown.minutes }}</div>
                        <div class="descr">минут</div>
                    </div>
                    <div class="dots">:</div>
                    <div class="time-fragment">
                        <div class="head">{{ countdown.seconds }}</div>
                        <div class="descr">секунд</div>
                    </div>
                </div>
<!--                <div class="tournament clear fond">-->
<!--                    <h2 class="fond-h2">Призовой фонд</h2>-->
<!--                    <span class="fond_title">Фонд турнира может меняться по мере активности игроков</span>-->
<!--                    <div class="fond-value">{{ tournament.participant_count > 0 ? tournament.participant_count * 100 : 200 }} points</div>-->
<!--                </div>-->

                <div class="module">
                  <div class="players_list__title">Учасники турнира</div>

                  <div class=" players_list row">
                    <div v-for="player in players"  class="player_item row">
                      <div class="player_item__info row">
                        <img v-bind:src="player.telegram_user.photo_url" class="player_item__img">
                        <div class="player_item__name">{{ player.public_name }}</div>
                      </div>
                      <div class="player_item__ordinal">{{ player.pivot.serial_number }}</div>
                    </div>
                  </div>
                </div>

<!--                <div class="module">-->
<!--                    <p class="descr">-->
<!--                        Формируется фонд турнира, который состоит из Buy-in (100 очков), Re-entry (100 очков) и Add-on (200 очков).-->
<!--                    </p>-->
<!--                    <p class="descr">-->
<!--                        🔥По окончании турнира суммируются все очки и распределяются по процентам, согласно призовым местам: 1 - 25%, 2 - 15%, 3 - 10%, 4 - 8%, 5 - 7%, 6 - 6%, 7 - 5%, 8 - 4%, 9 - 3%, с 10 до 13 - 2,5%, с 14 до 17 - 1,5%, 18 - 1%-->
<!--                    </p>-->
<!--                    <p class="descr">-->
<!--                        🔥Если количество игроков,  участвующих в турнире, не превышает 18 человек, рейтинг рассчитывается по системе выше, и оставшиеся очки делятся на всех поровну и округляются в большую сторону до ровной единицы.-->
<!--                    </p>-->
<!--                </div>-->
                <div class="module">
                    <h3>Описание турнира</h3>

                    <div v-for="type in tournament.types">
                        <p class="descr">
                            <span style="font-weight: bold;color: white;">{{ type.title }}</span> - {{ type.description }}
                        </p>
                    </div>
                </div>
                <div class="tournament clear stat">
                    <div class="stat-elem">
                        <div class="left">Стек</div>
                        <div class="right">{{ tournament.stack }} ({{ tournament.small_blind }}/{{ tournament.big_blind }}/{{ tournament.ante }})</div>
                    </div>
                    <div class="stat-elem">
                        <div class="left">Buy-in</div>
                        <div class="right">{{ !tournament.free_entry ? tournament.buy_in + '₽' : 'Бесплатно' }}</div>
                    </div>
                    <div class="stat-elem">
                        <div class="left">Re-Entry</div>
                        <div class="right">{{ !tournament.without_re_entry ? tournament.re_entry + '₽' : 'Без re-enty' }}</div>
                    </div>
                    <div class="stat-elem">
                        <div class="left">Add-on</div>
                        <div class="right">{{ !tournament.without_add_on ? tournament.add_on + '₽' : 'Без add-on' }}</div>
                    </div>
                </div>
                <div v-if="tournament.is_private" class="module">
                    <div  class="butt private_tournament" >
                        Участие по приглашению администрации
                    </div>
                </div>
                <div v-if="!tournament.is_private" class="module">
                    <button @click="joinTournament(tournament.id)" v-if="!tournament.participant" class="join-button" style="width: 100%">Принять участие</button>
                    <div v-if="tournament.participant" class="butt" style="text-align: center; margin-bottom: 15px">Вы записаны, ждем вас на игру!</div>
                    <button @click="leaveTournament(tournament.id)" v-if="tournament.participant" class="join-button cancel" style="width: 100%">Отменить запись</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data: function () {
        return {
            tournament:{
                title:null,
                id:null,
            },
            countdown: {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            },
            countdownTimerId: null,
            players: [],
        }
    },
    methods:{
        async getTournament(){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/tournament/'+ this.$route.params.id +'/get',
                });
                this.tournament = data.data

                this.startCountdown();   // start timer after data is loaded

                return true;
            } catch (error) {
                return false;
            }
        },

        async getTournamentPlayers(){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/tournament/'+ this.$route.params.id +'/players',
                });

                // this.players = data.players;

              // console.log(data.players[0].telegram_user)

                return data;
            } catch (error) {
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
                this.tournament.participant = true

                this.players = data.players;

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
                this.tournament.participant = false;

                this.players = data.players

                return true;
            } catch (error) {
                return false;
            }
        },

        startCountdown() {
            if (this.countdownTimerId) {
                clearInterval(this.countdownTimerId);
            }

            this.updateCountdown(); // initial calculation

            this.countdownTimerId = setInterval(() => {
                this.updateCountdown();
            }, 1000);
        },

        updateCountdown() {
            if (!this.tournament || !this.tournament.at) {
                return;
            }

            // If instead date and time are separate, use this form:
            let target = new Date(this.tournament.at_date);
            // console.log(target);
            const now = new Date();
            let diffMs = target.getTime() - now.getTime();

            if (diffMs <= 0) {
                diffMs = 0;
                if (this.countdownTimerId) {
                    clearInterval(this.countdownTimerId);
                    this.countdownTimerId = null;
                }
            }

            const totalSeconds = Math.floor(diffMs / 1000);
            const days = Math.floor(totalSeconds / (24 * 60 * 60));
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            this.countdown.days = String(days).padStart(2, '0');
            this.countdown.hours = String(hours).padStart(2, '0');
            this.countdown.minutes = String(minutes).padStart(2, '0');
            this.countdown.seconds = String(seconds).padStart(2, '0');
        }
    },
    computed:{

    },
    mounted() {
        this.getTournament();

        this.getTournamentPlayers().then((data) => {
          this.players = data.players
        })
    },
    beforeDestroy() {
        if (this.countdownTimerId) {
            clearInterval(this.countdownTimerId);
        }
    }
}
</script>


<style>

.row {
  display: flex;
  flex-wrap: nowrap;
}
.players_list__title {
  font-size: 1.17em;
  font-weight: 700;
  margin-block-end: 1em;
}
.players_list {
  flex-direction: column;
  gap: 10px;
}
.player_item {
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #3E3B48;
  padding: 10px;
}
.player_item__info {
  align-items: center;
}
.player_item__img {
  width: 40px;
  margin-right: 10px;
  border-radius: 8px;
}
.player_item__name {
  font-size: 18px;
  line-height: 24px;
}
.player_item__ordinal {
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  color: #EDB258;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #6B6581;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
