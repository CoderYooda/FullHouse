export default ({

    SET_ERRORS(state, errors) {
        state._errors = errors;
    },

    setAuthenticated(state){
        state._authenticated = true
    },

    setUser(state, userData) {

        state._user = userData.user;
        if (userData.user === null || userData.user === undefined) {
            localStorage.removeItem('_token');
            localStorage.removeItem('_authenticated');

            return
        }

        localStorage.setItem('_token', userData.token );

        axios.interceptors.request.use(
            config => {
                config.headers['Token'] = localStorage.getItem('_token');
                return config;
            },
            error => {
                console.log("TokenSetERROR", error)
                return Promise.reject(error);
            }
        );
    },

    setPlayer(state, player) {
        state._user = player;
    }
});
