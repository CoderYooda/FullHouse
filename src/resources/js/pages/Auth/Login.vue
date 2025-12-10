<template>
<input name="login" @input="event => login = event.target.value">
<input name="password" @input="event => password = event.target.value">
    <LogoutButton/>
    <button type="submit" @click="loginAction">Войти</button>
    <a href="#" @click="registerAction">Регистрация</a>
    <pre style="overflow: scroll;background: antiquewhite;">
        {{ TelegramData }}
    </pre>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Cards from "../../Utils/Cards";
import LogoutButton from "../components/LogoutButton.vue";

export default {
    components: {LogoutButton},
    data: function () {
        return {
            login: null,
            password: null,
        }
    },
    methods:{
        ...mapActions('auth', ['Login', 'Register']),
        ...mapGetters('Auth', ['Authenticated']),

        loginAction(){
            this.Login({
                login:this.login,
                password:this.password,
            }).then((result) => {
                if (result) {
                    this.$router.push('/')
                }
            })
        },
        registerAction(){
            this.$router.push({ path: 'register' })
        }
    },
    computed:{
        TelegramData() {
            return window.Telegram ?? "null";
        },

    },
    mounted() {
        console.log(123)
    },
}
</script>

<style>

</style>