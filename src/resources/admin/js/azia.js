'use strict'
import 'select2';
import axios from "axios";
import { createApp } from 'vue';
window.$ = window.jQuery = require("jquery");
import Tournament from './Tournament.vue';
window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('azMenuShow').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementsByTagName('body')[0].classList.toggle('az-header-menu-show');
    })
    document.querySelectorAll('.az-header-menu-header > .close')[0]
        .addEventListener('click', function(e) {
        e.preventDefault();
            document.getElementsByTagName('body')[0].classList.toggle('az-header-menu-show');
    });
    document.querySelectorAll('.az-navbar-backdrop')[0]
        .addEventListener('click', function(e) {
        e.preventDefault();
            document.getElementsByTagName('body')[0].classList.toggle('az-header-menu-show');
    });

    document.querySelectorAll('.tournament-short').forEach(function(elem){
        elem.addEventListener('click', function(e) {
            if (!window.matchMedia('(min-width: 575px)').matches) {
                e.preventDefault();
                window.location.href = this.dataset.tournament_url
            }
        });
    });
});


$(document).ready(()=>{
    $('.select2').select2()

    if (document.getElementById('tournament')){
        const tournament = createApp(Tournament)
        tournament.mount('#tournament')
    }
})
