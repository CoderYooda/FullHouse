import { createRouter, createWebHistory } from 'vue-router';
import LoginWeb from '../pages/LoginWeb.vue';
import Register from '../pages/Register.vue';
import VerifyEmail from '../pages/VerifyEmail.vue';
import Player from '../pages/Player.vue';
import Agreement from '../pages/Agreement.vue';
import Tournaments from '../pages/Tournaments.vue';
import Tournament from '../pages/Tournament.vue';
import Report from '../pages/Report.vue';
import Rating from '../pages/Rating.vue';
import Game from '../pages/Game.vue';
import LoginTelegram from '../pages/LoginTelegram.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: LoginWeb,
        meta: { layout: 'Auth', auth: false },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { layout: 'Auth', auth: false },
    },
    {
        path: '/verify-email/:email?',
        name: 'verify-email',
        component: VerifyEmail,
        meta: { layout: 'Auth', auth: false },
    },
    {
        path: '/player',
        name: 'player',
        component: Player,
        meta: { layout: 'Main', auth: true },
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: Agreement,
        meta: { layout: 'Clear', auth: true },
    },
    {
        path: '/tournaments',
        name: 'tournaments',
        component: Tournaments,
        meta: { layout: 'Main', auth: true },
    },
    {
        path: '/tournaments/:id',
        name: 'tournament',
        component: Tournament,
        meta: { layout: 'Main', auth: true },
    },
    {
        path: '/report',
        name: 'report',
        component: Report,
        meta: { layout: 'Main', auth: true },
    },
    {
        path: '/rating',
        name: 'rating',
        component: Rating,
        meta: { layout: 'Main', auth: true },
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
        meta: { layout: 'Main', auth: true },
    },
    // Единственный Telegram-маршрут — только для входа через бота
    {
        path: '/telegram/player',
        name: 'telegram-entry',
        component: LoginTelegram,
        meta: { layout: 'Main', auth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('_token');
    const requiresAuth = to.meta.auth === true;

    if (requiresAuth && !token) {
        next('/login');
    } else if (!requiresAuth && token && (to.path === '/login' || to.path === '/register')) {
        next('/player');
    } else {
        next();
    }
});

export default router;