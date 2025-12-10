import axios from "axios";
export default class TelegramRequester {
    constructor() {
    }
    async telegramUserValidate(validateData) { const {data} = await window.axios({method: 'POST', url: '/telegram/user/validate', data:validateData}); return data }
    async whoami() {
        const {data} = await window.axios(
            {
                method: 'POST',
                url: '/auth/whoami',
            });
        return data
    }
}
