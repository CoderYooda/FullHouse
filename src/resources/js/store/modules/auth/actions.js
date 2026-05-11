export default ({
    async TelegramAuth({ getters, commit, dispatch }, validateData) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/telegram/user/auth',
                data: {
                    query: validateData,
                    company: window.Slug,
                }
            });

            localStorage.setItem('_token', data.token);
            commit('setToken', data.token);
            await dispatch('GetPlayer'); // получаем и сохраняем пользователя

            return data.token;
        } catch (error) {
            commit('SET_ERRORS', error.response.data);
            return false;
        }
    },
    async GetPlayer({ commit, state }) {

        // Проверяем токен
        const token = localStorage.getItem('_token');
        if (!token) {
            console.log('No token found');
            return null;
        }

        try {
            const { data } = await axios.get('/api/me');

            commit('SET_USER', data);
            return data;
        } catch (error) {
            console.error('GetPlayer error:', error.response?.status);
            if (error.response?.status === 401) {
                commit('LOGOUT');
                localStorage.removeItem('_token');
            }
            throw error;
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

    async restoreSession({ dispatch, commit }) {
        const token = localStorage.getItem('_token');
        if (!token) {
            return false;
        }

        try {
            await dispatch('GetPlayer');
            return true;
        } catch (error) {
            commit('LOGOUT');
            return false;
        }
    },

});
