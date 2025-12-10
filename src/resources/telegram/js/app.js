import TelegramRequester from "./TelegramRequester";
import axios from "axios";

window.requester = new TelegramRequester();
window.axios = axios;

document.addEventListener('DOMContentLoaded', function() {
    console.log("Start Telegram")

    let data_corrupt = document.getElementById('telegram_auth_failed')

    requester.telegramUserValidate({
        query: Telegram.WebApp.initData
    }).then(function (response) {
        let token = response.token
        window.sessionStorage.setItem('token', token)
        axios.defaults.headers.common['token'] = token;

        requester.whoami().then(() => {
            window.location.href = '/game';
        })
            .catch(function (e) {
            data_corrupt.style.display = 'block'
        });
    })
        .catch(function (e) {
            console.log(e)
        });
});