import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/Loading.vue'),
        redirect: to => {
            return { name: 'player' }
        },
    },
    {
        path: '/player',
        name: 'player',
        component: () => import('../pages/Player.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/tournaments',
        name: 'tournaments',
        component: () => import('../pages/Tournaments.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        },

    },
    {
        path: '/tournaments/:id',
        name: 'tournament',
        component: () => import('../pages/Tournament.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('../pages/Report.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/rating',
        name: 'rating',
        component: () => import('../pages/Rating.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../pages/Game.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'),
        meta: {
            layout: 'Auth',
            auth: false,
        }
    },
];

const router = createRouter({
    history: createWebHistory('/telegram'),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

router.beforeEach((
    to,
    from,
    next
) => {
    if (localStorage.getItem('_token') === null && to.meta.auth === true) {
        next({ name: 'login' });
    }
    next();
});

export default router;
