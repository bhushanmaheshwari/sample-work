
export default {
    setBc(context, bc) {
        context.commit('setBreadcrumbs', bc);
    },
    setHomePage(context, isHomePage) {
        context.commit('setHomePage', isHomePage);
    },
    getData(context, isHomePage) {
        fetch('https://api-sample-work.azurewebsites.net/api/coaches', {
            method: 'GET'
        }).then((data) => {
            console.log(data);
        })
    }
};