<template lang="">
    <div v-if="isLoading" class="container preloader">
        <div class="blur-overlay"></div>
        <div class="logo"></div>
    </div>
<component :is="layout"></component>
</template>

<script>
import Auth from './layouts/Auth.vue';
import Main from './layouts/Main.vue';
import DevTools from './layouts/DevTools.vue';
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'app',
    components: {
        Auth,
        Main,
        DevTools,
    },
    mounted() {
        if(window.Telegram.WebApp.initData){
            this.telegramDataCheck(window.Telegram.WebApp.initData)
        } else if (this.$store.state._isLocalMode){
            let demoData = 'user=%7B%22id%22%3A1269912109%2C%22first_name%22%3A%22%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%22%2C%22last_name%22%3A%22%D0%A1%D0%B5%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2%22%2C%22username%22%3A%22CoderYooda%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg%22%7D&chat_instance=1349348516244071242&chat_type=sender&auth_date=1765537954&signature=_xZs17QSBhLVzgDzZAgUou-7x2ji3iEEqb-VXnA73ST2dgooIm5kO_o-kpZ6WQho9FX3IpeSzfqFsQ-ACtzPBA&hash=f4490316b56498ce3203de449b44de0e197bf0523bd97cbf4054fb745865df23';
            this.telegramDataCheck(demoData)
        } else {
            alert('Интерфейс доступен только через Telegram MiniApp')
        }
    },
    methods: {
        ...mapActions('auth', ['TelegramAuth', 'WhoAmI']),
        ...mapGetters('auth', ['Authenticated', 'Token', 'Register']),

        // hasToken(){
        //     return this.Token() !== null
        // },
        whoAmI(){
            this.WhoAmI().then((result) => {
                if (result) {
                    if (!this.$route.meta.auth) {
                        this.$store.state.loaded = true
                        this.$router.push({ name: 'player' })
                    }

                    return
                }
                this.$router.push({ path: 'login' })
            })
        },
        telegramDataCheck(data){
            this.TelegramAuth(data).then((result) => {
                if (result) {
                    this.$store.state.loaded = true
                    this.$router.push({ name: 'player' })

                    return
                }
                alert('Авторизация Telegram невалидна')
                this.$router.push({ path: 'login' })
            })
        }
    },
    computed: {

        // ...mapGetters(['LOADING']),

        isLoaded(){
            return this.$store.state.auth._authenticated === true
        },
        isLoading(){
            return this.$store.state._fullscreenLoading;
        },

        layout() {
            return this.$route.meta.layout || 'Auth';
        }
    }
}
</script>
