import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from "axios";

require('./functions');

window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


document.addEventListener('DOMContentLoaded', function() {

    // const csrfToken = document.querySelector('meta[name="csrf-token"]')
    //     .getAttribute('content');

    // window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // window.axios.defaults.headers.common['Accept'] = 'application/json';
    // window.axios.defaults.headers.common['Content-Type'] = 'application/json';
    // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    // axios.post('/api/tokens/telegram/create').then(data => {
    //     alert(data);
    // });


    // alert(csrfToken)
    // axios.interceptors.request.use(
    //     config => {
    //         config.headers['X-CSRF-TOKEN'] = csrfToken;
    //
    //         return config;
    //     },
    //     error => {
    //         console.log("TokenSetERROR", error)
    //
    //         return Promise.reject(error);
    //     }
    // );
    // let app = createApp(App)
    // await router.isReady()
    // let app = createApp(App)
    // .use(store)
    // .use(router);

    // app.mount('#app');

    const app = createApp(App)
    app.use(router)
    app.use(store)

    if (router.isReady()) {
        app.mount('#app')
    }

});
