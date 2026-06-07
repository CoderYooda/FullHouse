import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
// import axios from "axios";

require('./functions');




document.addEventListener('DOMContentLoaded', function() {


    const app = createApp(App)
    app.use(router)
    app.use(store)

    if (router.isReady()) {
        app.mount('#app')
    }

});
