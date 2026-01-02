import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';

const routes = [
    {
        path: '/',
        name: 'loading',
        component: () => import('../pages/Lobby/Lobby.vue'),
        meta: {
            layout: 'Main',
            auth: false,
        }
    },
    {
        path: '/player',
        name: 'player',
        component: () => import('../pages/Player/Player.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Auth/Login.vue'),
        meta: {
            layout: 'Auth',
            auth: false,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/Auth/Register.vue'),
        meta: {
            layout: 'Auth',
            auth: false,
        }
    },
    {
        path: '/play/:uuid',
        name: 'play',
        component: () => import('../pages/components/Game.vue'),
        props: true,
        meta: {
            layout: 'Main',
            auth: true,
        }
    },
    {
        path: '/devtools',
        name: 'devtools',
        component: () => import('../pages/DevTools.vue'),
        meta: {
            layout: 'DevTools',
            auth: true,
        }
    }
];

const router = createRouter({
    history: createWebHistory('/telegram' +
        ''),
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
