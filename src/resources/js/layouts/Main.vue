<template>
    <div class="main container">
        <div class="blur-overlay static"></div>
            <router-view @scroll.passive="onScroll" id="scroller" class="view"/>

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

    <CitySelector :visible="showCitySelector" @city-selected="onCitySelected" />
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import CitySelector from '../components/CitySelector.vue';

export default {
    name: 'Main',
    components: { CitySelector },
    // components: {SeatModal, LogoutButton, DevelopPanel},

    data: function () {
        return {
            isAsideOpen: (localStorage.getItem('aside_hidden') === 'true'),
            pageLoaded: false,
            searchActive: false,
            categories: 'categories',
            background:0,
            showCitySelector: false,
        }
    },

    watch: {
      user: {
        immediate: true,
        handler(newUser) {
          if (newUser && (newUser.city_id === undefined || newUser.city_id === null)) {
            this.showCitySelector = true;
          } else {
            this.showCitySelector = false;
          }
        }
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
        },

        onCitySelected() {
          this.showCitySelector = false;

          this.$store.dispatch('auth/GetPlayer');
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
