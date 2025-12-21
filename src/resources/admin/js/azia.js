'use strict'
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
