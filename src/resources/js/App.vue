<template lang="">
    <div v-if="isLoading">123</div>
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
        window.addEventListener('keydown', (e) => {
            if (e.key === 'd') {
                this.$store.state._develop_mode = !this.$store.state._develop_mode;
            }
        });

        if (this.hasToken()){
            this.whoAmI()
            console.log('AUTH LOADED', sessionStorage.getItem('token'))
            this.$store.state.loaded = true

            return
        }

        if (!this.hasToken()) {
            if(window.Telegram.WebApp.initData){

                this.telegramDataCheck()
                this.$store.state.loaded = true
                console.log('Loaded TG')
            } else {
                this.$store.state.loaded = true
              console.log('Loaded REdirect')
                this.$router.push({ path: 'login' })
            }
        }
    },
    methods: {
        ...mapActions('auth', ['TelegramAuth', 'WhoAmI']),
        ...mapGetters('auth', ['Authenticated', 'Token', 'Register']),

        hasToken(){
            return this.Token() !== null
        },
        whoAmI(){
            this.WhoAmI().then((result) => {
                if (result) {
                    if (!this.$route.meta.auth) {
                        this.$router.push({ name: 'main' })
                    }

                    return
                }
                this.$router.push({ path: 'login' })
            })
        },
        telegramDataCheck(){
            this.TelegramAuth(window.Telegram.WebApp.initData).then((result) => {
                if (result) {
                    this.$router.push({ name: 'main' })

                    return
                }
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
          // return this.LOADING();
        },

        layout() {
            return this.$route.meta.layout || 'Auth';
        }
    }
}
</script>
