<template>
    <input name="login" placeholder="Логин" @input="event => login = event.target.value">
    <input name="email" placeholder="Email" @input="event => email = event.target.value">
    <input name="password" placeholder="Пароль" @input="event => password = event.target.value">
    <input name="passwordConfirmation" placeholder="Подтверждение" @input="event => passwordConfirmation = event.target.value">
    <button type="submit" @click="registerAction">Зарегистрироваться</button>
    <a href="#" @click="loginAction">Вход</a>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    data: function () {
        return {
            login: null,
            email: null,
            password: null,
            passwordConfirmation: null,
        }
    },
    methods:{
        ...mapActions('auth', [
            'Register'
        ]),
        registerAction(){
            this.Register({
                login:this.login,
                email:this.email,
                password:this.password,
                password_confirmation:this.password,
            }).then((result) => {
                if (result) {
                    this.$router.push('/')
                }
            })
        },
        loginAction(){
            this.$router.push({ path: 'login' })
        }
    },
    mounted() {
        if (this.$store.state.auth._authenticated){
            this.$router.push({ path: 'play' })
        }
    },
}
</script>

<style>

</style>