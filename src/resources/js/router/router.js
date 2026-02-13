import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';

const routes = [
    {
        path: '/:slug',
        name: 'main',
        component: () => import('../pages/Loading.vue'),
        redirect: to => {
            return { name: 'player' }
        },
    },
    {
        path: '/:slug/player',
        name: 'player',
        component: () => import('../pages/Player.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/:slug/agreement',
        name: 'agreement',
        component: () => import('../pages/Agreement.vue'),
        meta: {
            layout: 'Clear',
            auth: true,
        }
    },
    {
        path: '/:slug/tournaments',
        name: 'tournaments',
        component: () => import('../pages/Tournaments.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        },

    },
    {
        path: '/:slug/tournaments/:id',
        name: 'tournament',
        component: () => import('../pages/Tournament.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/:slug/report',
        name: 'report',
        component: () => import('../pages/Report.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/:slug/rating',
        name: 'rating',
        component: () => import('../pages/Rating.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/:slug/game',
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
        next({ name: 'login', params: { slug: window.Slug } });
    }
    next();
});

export default router;
