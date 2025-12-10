<template>
    <button @click="logout">Выход</button>
</template>

<script>

import {mapMutations} from "vuex";

export default {
    methods:{
        ...mapMutations('auth', ['setUser']),

        logout(){
            this.setUser(null)
            // this.$router.push('/')
            window.location.href = '/'
        },
    }
}

</script>

<style scoped>
</style>