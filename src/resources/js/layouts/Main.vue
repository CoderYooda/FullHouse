<template>
    <div class="main container">
        <div class="blur-overlay static"></div>
<!--        <div class="tg_buttons_header" style="margin-bottom: 30px">-->
<!--            <div class="tg_center_container" @click="test">-->
<!--                <div class="balance">{{ user.credits }}</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="header">-->
<!--            <div class="boxed">-->
<!--                <div class="profile">-->
<!--                    <div class="user_pic">-->
<!--                        <img v-bind:src="user.pic">-->
<!--                    </div>-->
<!--                    <div class="user_data">-->
<!--                        <div class="user_name">-->
<!--                            {{ user.name }}-->
<!--                        </div>-->
<!--                        <div class="level_graph"></div>-->
<!--                        <div class="user_lvl">-->
<!--                            уровень 151-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="spacer">-->
<!--&lt;!&ndash;                    <button @click="enterFullscreen()">fullscreen</button>&ndash;&gt;-->
<!--&lt;!&ndash;                    <LogoutButton/>&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="credit_box">-->
<!--                    <div class="title">Баланс</div>-->
<!--                    <div class="credits">{{ user.credits }}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <DevelopPanel/>-->
<!--        </div>-->

            <router-view @scroll.passive="onScroll" id="scroller" class="view"/>
<!--        <router-view v-slot="{ Component }">-->
<!--            <transition name="fade">-->
<!--                <div class="content">-->
<!--                    <component :is="Component" />-->
<!--                </div>-->
<!--            </transition>-->
<!--        </router-view>-->

        <div class="footer boxed">
            <div class="buttons">
                <router-link activeClass="active" :to="{ name: 'report' }" class="footer_button report_button"><div class="active-arrow"></div></router-link>
                <router-link activeClass="active" :to="{ name: 'player' }" class="footer_button profile_button"><div class="active-arrow"></div></router-link>
                <router-link activeClass="active" :to="{ name: 'tournaments' }" class="footer_button main_button" />
                <router-link activeClass="active" :to="{ name: 'rating' }" class="footer_button rating_button"><div class="active-arrow"></div></router-link>
                <router-link activeClass="active" :to="{ name: 'game' }" class="footer_button cards_button"><div class="active-arrow"></div></router-link>
            </div>

        </div>
    </div>
    <div class="body-backdrop" :style="{ 'background-position-y': -background / 3 + 'px' }"></div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
// import DevelopPanel from "../pages/components/DevelopPanel.vue";
// import LogoutButton from "../pages/components/LogoutButton.vue";
// import {SocketConsumerHandler} from "../pages/Service/Socket/SocketConsumerHandler";
// import SeatModal from "../pages/components/Game/SeatModal.vue";
// import MainNav from '../components/layout/MainNav/MainNav.vue';
// import HeadUser from "../pages/Auth/modules/HeadUser.vue";

export default {
    name: 'Main',
    // components: {SeatModal, LogoutButton, DevelopPanel},

    data: function () {
        return {
            isAsideOpen: (localStorage.getItem('aside_hidden') === 'true'),
            pageLoaded: false,
            searchActive: false,
            categories: 'categories',
            background:0,
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
        onScroll(event){
            this.background = event.target.scrollTop;
        }
    },
    computed:{
        ...mapGetters('auth', ['User']),
        user(){
            return this.User
        },
        topPadding(){
            return this.safeTop+'px'
        },
        isLoading(){
            return this.$store.state._fullscreenLoading;
        },
    },
    async mounted() {
        this.enterFullscreen()

        setTimeout(() => {
            // this.$refs['app'].style.opacity = 1;
            this.pageLoaded = true;
            this.$store.state._fullscreenLoading = false;
        }, 2000);

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

.header{

}
.main{
    background-image: url(/public/img/game_bg.png);
}
</style>
