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

    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    window.axios.defaults.headers.common['Accept'] = 'application/json';
    window.axios.defaults.headers.common['Content-Type'] = 'application/json';
    // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    let app = createApp(App)
    .use(store)
    .use(router);

    app.mount('#app');
});
