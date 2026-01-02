export default ({
    Authenticated(state) {
        return state._authenticated;
    },

    Token() {
        return localStorage.getItem('_token');
    },

    Player(state) {
        return state._player;
    },

    ERRORS(state) {
        return state._errors;
    },

    HAS_ERRORS(state) {
        return Boolean(state._errors);
    },

    HAS_ERROR: state => slug => {
        return Boolean(state._errors && state._errors.errors[slug]);
    },
});
