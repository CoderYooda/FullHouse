<template>
123
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
