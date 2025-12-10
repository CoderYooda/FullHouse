<template>
    <div class="main container">
        <div class="tg_buttons_header">
            <div class="tg_center_container" @click="test">
                <div class="balance">{{ user.credits }}</div>
            </div>
        </div>
        <div class="header">
            <div class="boxed">
                <div class="profile">
                    <div class="user_pic">
                        <img v-bind:src="user.pic">
                    </div>
                    <div class="user_data">
                        <div class="user_name">
                            {{ user.name }}
                        </div>
                        <div class="level_graph"></div>
                        <div class="user_lvl">
                            уровень 151
                        </div>
                    </div>
                </div>
                <div class="spacer">
<!--                    <button @click="enterFullscreen()">fullscreen</button>-->
<!--                    <LogoutButton/>-->
                </div>
                <div class="credit_box">
                    <div class="title">Баланс</div>
                    <div class="credits">{{ user.credits }}</div>
                </div>
            </div>
            <DevelopPanel/>
        </div>
        <div class="content">
            <div class="boxed">
                <router-view></router-view>
            </div>
            <SeatModal/>
        </div>
<!--        <div class="footer">-->
<!--            <div class="boxed">-->
<!--                <div class="menu">-->
<!--                    <button @click="toggleDevelopMode()">dev mode</button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import DevelopPanel from "../pages/components/DevelopPanel.vue";
import LogoutButton from "../pages/components/LogoutButton.vue";
import {SocketConsumerHandler} from "../pages/Service/Socket/SocketConsumerHandler";
import SeatModal from "../pages/components/Game/SeatModal.vue";
// import MainNav from '../components/layout/MainNav/MainNav.vue';
// import HeadUser from "../pages/Auth/modules/HeadUser.vue";

export default {
    name: 'Main',
    components: {SeatModal, LogoutButton, DevelopPanel},

    data: function () {
        return {
            isAsideOpen: (localStorage.getItem('aside_hidden') === 'true'),
            pageLoaded: false,
            searchActive: false,
            categories: 'categories',
        }
    },

    // components: { HeadUser },

    methods: {
        ...mapMutations(['TOGGLE_DEVELOP_MODE']),
        appKeyUp(event){
            if(event.key === 'Insert'){this.toggleAside();}
            // if(event.key === 'Escape'){this.closeUserMenu();}
        },
        toggleAside() {
            this.isAsideOpen = ! this.isAsideOpen;
            localStorage.setItem('aside_hidden', this.isAsideOpen);
        },

        activateSearch(){
            this.searchActive = true;
        },
        deActivateSearch(){
            this.searchActive = false;
            this.$refs.search.value = '';
        },
        enterFullscreen() {
            // Telegram.WebApp.BackButton.hide()
            // Telegram.WebApp.MainButton.hide()
            // Telegram.WebApp.SecondaryButton.hide()
            // Telegram.WebApp.SettingsButton.hide()

            if (Telegram.WebApp.initData !== "") {
                Telegram.WebApp.requestFullscreen()
            }
        },
        toggleDevelopMode() {
            this.TOGGLE_DEVELOP_MODE()
        },
        test(){
          alert(1)
        },
    },
    computed:{
        ...mapGetters('auth', ['User']),
        user(){
            return this.User
        },
        topPadding(){
            return this.safeTop+'px'
        }
    },
    async mounted() {
        this.enterFullscreen()
        setTimeout(() => {
            this.pageLoaded = true;
        });

        setTimeout(() => {
            // this.$refs['app'].style.opacity = 1;
        }, 100);



        document.addEventListener('keyup', (event) => this.appKeyUp(event));
    },
}
</script>

<style>
:root {
    --tg-safe-area-inset-top: 20px;
    --tg-content-safe-area-inset-top: 40px;
}
.tg_buttons_header{

}
.tg_center_container{
    width: fit-content;
    margin: var(--tg-safe-area-inset-top) auto 0 auto;
    height: var(--tg-content-safe-area-inset-top);
    font-size: 12px;
    display: flex;
    .balance{
        margin: auto;
        height: 30px;
        background: #0000004a;
        border-radius: 20px;
        padding: 0px 13px;
        line-height: 30px;
        color: #fff;
    }
}
.content {
    flex: auto;
    overflow:hidden;
    position: relative;
}
.header{

}
.main{
    background-image: url(/public/img/game_bg.png);
}
</style>
