import { createStore } from 'vuex';
import auth from './modules/auth/index';
import state from './modules/state/index';

export default createStore({
    state: {
        _develop_mode:false,
        _fullscreenLoading:true,
    },
    getters: {
        DEVELOP_MODE(state) {
            return state._develop_mode
        },
    },
    mutations: {
        TOGGLE_DEVELOP_MODE(state) {
            state._develop_mode = !state._develop_mode
        },
    },
    actions: {
    },
    modules: {
        auth,
        state,
    }
})


