export default ({
    async TelegramAuth({ getters, commit }, validateData) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/telegram/user/auth',
                data:{
                    query: validateData,
                }
            });
            let userData = data.data;
            commit('setUser', userData);
            commit('setAuthenticated');

            return true;
        } catch (error) {
            // alert(error)
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },
    // async Login({ getters, commit }, loginData) {
    //     try {
    //         const { data } = await axios({
    //             method: 'POST',
    //             url: '/auth/login',
    //             data: loginData
    //         });
    //         commit('setUser', data.user, data.token);
    //         commit('setAuthenticated');
    //
    //         return true;
    //     } catch (error) {
    //         commit('SET_ERRORS', error.response.data);
    //
    //         return false;
    //     }
    // },
    // async Register({ getters, commit }, registerData) {
    //     try {
    //         const { data } = await axios({
    //             method: 'POST',
    //             url: '/auth/register',
    //             data: registerData
    //         });
    //         commit('setUser', data.user);
    //         commit('setAuthenticated');
    //
    //         return data;
    //         if (getters.HAS_ERRORS) {
    //             commit('SET_ERRORS', null);
    //         }
    //     } catch (error) {
    //         commit('SET_ERRORS', error.response.data);
    //     }
    // },
    async WhoAmI({ getters, commit }) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/auth/whoami',
                headers:{
                    token:localStorage.getItem('_token'),
                },
            });

            commit('setUser', data.user);
            commit('setAuthenticated');
            console.log('setAuthenticated')
            return true;
        } catch (error) {
            return false;
            commit('SET_ERRORS', error.response.data);
        }
    },
});
