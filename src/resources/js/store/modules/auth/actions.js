export default ({
    async TelegramAuth({ getters, commit }, validateData) {
        try {
            // await axios.get('/sanctum/csrf-cookie')
            const { data } = await axios({
                method: 'POST',
                url: '/telegram/user/auth',
                data:{
                    query: validateData,
                }
            });
            let userData = data.data;
            commit('setUser', userData);
            commit('setAuthenticated');
            commit('setToken', data.data.token);

            return true;
        } catch (error) {
            // alert(error)
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },
    async UpdateName({ getters, commit }, name) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/player/update_name',
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
                data:{
                    name: name,
                }
            });
            commit('setUserName', data.data.name);

            return true;
        } catch (error) {
            // alert(error)
            commit('SET_ERRORS', error.response.data);

            return false;
        }
    },

});
