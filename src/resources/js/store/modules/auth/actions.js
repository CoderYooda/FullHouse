export default ({
    async TelegramAuth({ getters, commit }, validateData) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/telegram/user/auth',
                data:{
                    query: validateData,
                    company: window.Slug,
                }
            });

            return data.token;
        } catch (error) {
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },
    async GetPlayer({ getters, commit }) {
        try {
            const { data } = await axios({
                method: 'GET',
                url: '/api/player/getPlayer',
            });

            return data.data.user;
        } catch (error) {
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },
    async UpdateName({ getters, commit }, name) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/player/update_name',
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
                data:{
                    name: name,
                }
            });
            commit('setPlayerName', data.data.name);

            return true;
        } catch (error) {
            alert(error)
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },
    async AcceptAgreement({ getters, commit }) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/player/accept_agreement',
            });
            commit('setPlayerAgreement', true);

            return true;
        } catch (error) {
            alert(error)
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },

});
