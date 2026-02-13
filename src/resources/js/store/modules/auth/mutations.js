export default ({

    SET_ERRORS(state, errors) {
        state._errors = errors;
    },

    setPlayerAgreement(state, value) {
        state._player.agreement = value;
    },

    setToken(state, data) {
        state._authenticated = true
        state._token = data.token;
        // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
        localStorage.setItem('_token', data.token );

    },

    setPlayer(state, data) {
        state._player = data.player;
    }
});
