<template>
    <div class="content">
        <div class="boxed">
            <h2 class="page_h2">Предстоящие турниры</h2>
            <div>
                <div  class="module" v-if="!tournaments.length">
                    <div class="user-card" style="text-align: center">
                        Заполнение турниров в процессе, вернитесь позже
                    </div>
                </div>
                <router-link :to="{ path: '/tournaments/'+ tournament.id}" v-for="tournament in tournaments"  class="my-link-wrapper">
                    <div class="card">
                        <div class="aside-container">
                            <div class="left-side">
                                <div class="card-icon chip">{{ tournament.id }}</div>
                                <div class="timer">{{ tournament.start_at }}</div>
                            </div>
                            <div class="right-side">
                                <div class="card-title">
                                    <h3 class="head-title">
                                        {{ tournament.title }}
                                    </h3>
                                    <div class="title-label">
                                        <div class="chip-icon"></div>
                                        <div class="txt">Buy in {{ !tournament.free_entry ? tournament.buy_in + '₽' : 'Бесплатно' }}</div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    Стек: {{ tournament.stack }} ({{ tournament.small_blind }}/{{ tournament.big_blind }}/{{ tournament.ante }})<br>
<!--                                    Buy-in: {{ !tournament.free_entry ? tournament.buy_in + '₽' : 'Бесплатно' }}<br>-->
                                    Re-Entry: {{ !tournament.without_re_entry ? tournament.re_entry + '₽' : 'Без re-enty' }}<br>
                                    Add-on: {{ !tournament.without_add_on ? tournament.add_on + '₽' : 'Без add-on' }}<br>
                                </div>
                                <div class="card-footer">
                                    <div class="card-players">
                                        <div class="icon"></div>
                                        <div class="value">{{ tournament.participant_count}} {{ num_word(tournament.participant_count, ['запись', 'записи', 'записей'])}}</div>
                                    </div>
                                    <div class="card-date">
                                        <div class="icon"></div>
                                        <div class="value">{{ tournament.date }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            tournaments:[],
        }
    },
    methods:{
        async getTournaments(){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/tournament/list',
                });
                this.tournaments = data.data

                return true;
            } catch (error) {
                return false;
            }
        },
        num_word(value, words){
            value = Math.abs(value) % 100;
            let num = value % 10;
            if(value > 10 && value < 20) return words[2];
            if(num > 1 && num < 5) return words[1];
            if(num === 1) return words[0];

            return words[2];
        }
    },
    computed:{

    },
    mounted() {
        this.getTournaments()
    },
}
</script>

<style>

</style>
