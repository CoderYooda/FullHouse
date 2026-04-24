import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';

// Импорт компонентов
import Loading from '../pages/Loading.vue';
import LoginWeb from '../pages/LoginWeb.vue';
import LoginTelegram from '../pages/LoginTelegram.vue';
import Register from '../pages/Register.vue';
import VerifyEmail from '../pages/VerifyEmail.vue';
import Player from '../pages/Player.vue';
import Agreement from '../pages/Agreement.vue';
import Tournaments from '../pages/Tournaments.vue';
import Tournament from '../pages/Tournament.vue';
import Report from '../pages/Report.vue';
import Rating from '../pages/Rating.vue';
import Game from '../pages/Game.vue';

const routes = [
    // ==================== WEB-МАРШРУТЫ (БЕЗ slug) ====================
    {
        path: '/',
        redirect: () => {
            const token = localStorage.getItem('_token');
            if (token) {
                return '/player';
            }
            return '/login';
        },
    },
    {
        path: '/login',
        name: 'login',
        component: LoginWeb,
        meta: {
            layout: 'Auth',
            auth: false,
        },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            layout: 'Auth',
            auth: false,
        },
    },
    {
        path: '/verify-email/:email?',
        name: 'verify-email',
        component: VerifyEmail,
        meta: {
            layout: 'Auth',
            auth: false,
        },
    },
    {
        path: '/player',
        name: 'player',
        component: Player,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: Agreement,
        meta: {
            layout: 'Clear',
            auth: true,
        },
    },
    {
        path: '/tournaments',
        name: 'tournaments',
        component: Tournaments,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/tournaments/:id',
        name: 'tournament',
        component: Tournament,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/report',
        name: 'report',
        component: Report,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/rating',
        name: 'rating',
        component: Rating,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },

    // ==================== TELEGRAM-МАРШРУТЫ (с slug для обратной совместимости) ====================
    {
        path: '/telegram/:slug/login',
        name: 'login_telegram',
        component: LoginTelegram,
        meta: {
            layout: 'Auth',
            auth: false,
        },
    },
    {
        path: '/telegram/:slug/player',
        name: 'player_telegram',
        component: Player,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/agreement',
        name: 'agreement_telegram',
        component: Agreement,
        meta: {
            layout: 'Clear',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/tournaments',
        name: 'tournaments_telegram',
        component: Tournaments,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/tournaments/:id',
        name: 'tournament_telegram',
        component: Tournament,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/report',
        name: 'report_telegram',
        component: Report,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/rating',
        name: 'rating_telegram',
        component: Rating,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
    {
        path: '/telegram/:slug/game',
        name: 'game_telegram',
        component: Game,
        meta: {
            layout: 'Main',
            auth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

// Навигационный хук
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('_token');
    const requiresAuth = to.meta.auth === true;

    if (requiresAuth && !token) {
        next({ name: 'login' });
    } else if (!requiresAuth && token && (to.name === 'login' || to.name === 'register')) {
        next({ name: 'player' });
    } else {
        next();
    }
});

export default router;