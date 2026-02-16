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
                <div class="tournament clear fond">
                    <h2 class="fond-h2">Призовой фонд</h2>
                    <span class="fond_title">Фонд турнира может меняться по мере активности игроков</span>
                    <div class="fond-value">{{ tournament.participant_count > 0 ? tournament.participant_count * 100 : 200 }} points</div>
                </div>
                <div class="module">
                    <p class="descr">
                        Формируется фонд турнира, который состоит из Buy-in (100 очков), Re-entry (100 очков) и Add-on (200 очков).
                    </p>
                    <p class="descr">
                        🔥По окончании турнира суммируются все очки и распределяются по процентам, согласно призовым местам: 1 - 25%, 2 - 15%, 3 - 10%, 4 - 8%, 5 - 7%, 6 - 6%, 7 - 5%, 8 - 4%, 9 - 3%, с 10 до 13 - 2,5%, с 14 до 17 - 1,5%, 18 - 1%                   
                    </p>
                    <p class="descr">
                        🔥Если количество игроков,  участвующих в турнире, не превышает 18 человек, рейтинг рассчитывается по системе выше, и оставшиеся очки делятся на всех поровну и округляются в большую сторону до ровной единицы.
                    </p>
                </div>
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

        async leaveTournament(id){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/tournament/'+id+'/leave',
                    // headers:{
                    //     Authorization:'Bearer '+localStorage.getItem('_token'),
                    // },
                });
                this.tournament.participant = false

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
            console.log(target);
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
        this.getTournament()
    },
    beforeDestroy() {
        if (this.countdownTimerId) {
            clearInterval(this.countdownTimerId);
        }
    }
}
</script>

<style>

</style>
