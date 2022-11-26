export default {
    setBreadcrumbs(state, payload) {
        state.bc = payload;
    },
    setHomePage(state, payload) {
        state.isHomePage = payload;
    }
};