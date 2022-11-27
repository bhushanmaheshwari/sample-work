export default {
    getBasicTasks(state) {
        const tasks = state.tasks;
        return (tasks || []).map((task) => {
            return {
                taskKey: task.taskKey,
                title: task.title,
                shortDescription: task.shortDescription,
                defaultPath: `${task.taskKey}/${task.defaultStep}`,
                homepageImage: task.homepageImage
            }
        })
    },

    getBc(state) {
        return state.bc;
    },
    isHomePage(state) {
        return state.isHomePage;
    }
};