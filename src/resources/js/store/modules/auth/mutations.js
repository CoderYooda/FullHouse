export default ({

    SET_ERRORS(state, errors) {
        state._errors = errors;
    },

    setPlayerName(state, name) {
        state._player.public_name = name;
    },

    setToken(state, data) {
        state._authenticated = true
        state._token = data.token;
        // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
        localStorage.setItem('_token', data.token );
        axios.interceptors.request.use(
            config => {
                // config.headers['X-CSRF-TOKEN'] = token;
                config.headers['Authorization'] = 'Bearer '+ data.token;
                return config;
            },
            error => {
                console.log("TokenSetERROR", error)

                return Promise.reject(error);
            }
        );
    },

    setPlayer(state, data) {
        state._player = data.player;
    }
});
