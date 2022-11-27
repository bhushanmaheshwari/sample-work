
export default {
    setHomePage(context, isHomePage) {
        context.commit('setHomePage', isHomePage);
    },

    getData(context, isHomePage) {
        fetch('https://api-sample-work.azurewebsites.net/api/tasks', {
            method: 'GET'
        }).then((data) => {
            console.log(data);
        })
    },

    getTask(context, routeData) {
        const { taskKey } = routeData;
        const filteredTasks = context.state.tasks.filter((task) => task.taskKey === taskKey);
        context.commit('setCurrentTask', filteredTasks[0]);
        return { task: filteredTasks[0] };
    },

    getStep(context, routeData) {
        const { stepKey } = routeData;
        const task = context.state.currentTask;

        const step = task.steps[stepKey];
        const nextStep = task.steps[step.nextStep];

        context.commit('setBreadcrumbs', step.bc);

        return { step, nextStep };
    }
};