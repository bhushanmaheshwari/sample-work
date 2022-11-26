export default {
    setBc(context, bc) {
        context.commit('setBreadcrumbs', bc);
    },
    setHomePage(context, isHomePage) {
        context.commit('setHomePage', isHomePage);
    }
};