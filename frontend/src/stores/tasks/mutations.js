export default {
    setBreadcrumbs(state, payload) {
        state.bc = payload;
    },
    setHomePage(state, payload) {
        state.isHomePage = payload;
        if (payload) {
            state.bc = [];
        }
    },
    setCurrentTask(state, payload) {
        state.currentTask = payload;
    }
};