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
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'app',
    components: {
        Auth,
        Main,
    },
    mounted() {
        if (localStorage.getItem('_token')) {
            this.setToken({token:localStorage.getItem('_token')})
        } else {
            this.$router.push({
                path: 'login'
            });
        }
    },
    methods: {
        ...mapMutations('auth', ['setToken']),
    },
    computed: {

        // ...mapGetters(['LOADING']),


        isLoading(){
            return this.$store.state._fullscreenLoading;
        },

        layout() {
            return this.$route.meta.layout || 'Auth';
        }
    }
}
</script>
