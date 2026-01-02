<template>
    <div class="content">
        <div class="boxed">
            <h2 class="page_h2">Обратная связь</h2>
            <div class="module">
                <div>
                    <select v-model="topic" class="report_select">
                        <option value="1" >Проблема с приложением</option>
                        <option value="2" >Заявить об инциденте</option>
                        <option value="3" >Предложить идею</option>
                    </select>
                </div>
                <div v-if="topic === '2'">
                    <label style="margin-bottom: 10px; display: block">Дата и время инцидента</label>
                    <input v-model="date" class="report_input_date" type="datetime-local">
                </div>
                <div>
                    <textarea placeholder="Опишите ситуацию" v-model="message" rows="12" class="report_textarea" />
                </div>

                <div class="anon_block">
                    <label for="anon">Отправить анонимно</label>
                    <input v-model="anon" class="report_checkbox" id="anon" type="checkbox" checked>
                </div>
                <div @click="send()" class="join-button">
                    Отправить
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data: function () {
        let date = new Date();
        let localDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);

        return {
            topic: "1",
            date: localDate.toISOString().slice(0, 19),
            message:null,
            anon:false,
        }
    },
    methods:{
        send(){
            this.sendReport().then(() => {
                let date = new Date();
                let localDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
                this.topic = "1";
                this.date =  localDate.toISOString().slice(0, 19);
                this.message = null;
                this.anon = false;

                alert('Ваше обращение принято администрацией')
            });
            console.log(this.topic, this.date, this.message, this.anon);
        },
        async sendReport (){
            try{
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/feedback/create',
                    data:{
                        type: this.topic,
                        message: this.message,
                        date: this.date,
                        is_anon: this.anon,
                    }
                });

                return true;
            } catch (error) {
                return false;
            }
        },
    },
    computed:{

    },
    mounted() {

    },
}
</script>

<style>

</style>
