export default {
    SET_ERRORS(state, errors) {
        state._errors = errors;
    },

    setPlayerAgreement(state, value) {
        state._player.agreement = value;
    },

    setToken(state, data) {
        state._authenticated = true;
        state._token = data.token;
        localStorage.setItem('_token', data.token);
    },

    SET_TOKEN(state, token) {
        state._authenticated = true;
        state._token = token;
        localStorage.setItem('_token', token);
    },

    setPlayer(state, data) {
        state._player = data.player;
    },

    SET_USER(state, user) {

        state.user = user;
        state._authenticated = !!user;
        if (user && user.public_name) {
            state._player.public_name = user.public_name;
        }
        if (user && user.name) {
            state._player.first_name = user.name;
        }
        if (user && user.agreement !== undefined) {
            state._player.agreement = user.agreement;
        }
    },

    // Новая мутация для выхода
    LOGOUT(state) {
        state.user = null;
        state._token = null;
        state._authenticated = false;
        state._player = {
            public_name: null,
            first_name: null,
            last_name: null,
            pic: null,
            agreement: null,
        };
        localStorage.removeItem('_token');
    },

    // Очистка ошибок
    CLEAR_ERRORS(state) {
        state._errors = null;
    },
};