import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    namespaced: true,
    getters,
    actions,
    mutations,
    state() {
        return {
            task1: {
                title: 'Strategize',
                description: 'Faced with an existing system that uses a coupled templating engine like Smarty or Twig, how would you go about planning and executing a strategy for migrating the product to a headless frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.',
                tags: ['Smarty', 'Twig', 'migrating', 'headless frontend'],
                homepageImage: 'task1/task1-homepage.png',
                needImage: 'task1/task1-need.png',
                highlevelImage: 'task1/task1-highlevel.png',
                steps: [
                    { order: 1, title: '', icon: '', type: '', details: [] },
                    { order: 2, title: '', icon: '', type: '', details: [] },
                    { order: 3, title: '', icon: '', type: '', details: [] },
                ]

            },
            task2: {
                title: 'Work Smarter',
                description: 'How can we double the productivity of our engineers (without trading job satisfaction, system availability, quality, or security)?',
                tags: ['double', 'productivity'],
                homepageImage: 'task2/task2-homepage.png',
                needImage: 'task2/task2-need.png',
                highlevelImage: 'task2/task2-highlevel.png',
                steps: [
                    { order: 1, title: '', icon: '', type: '', details: [] },
                    { order: 2, title: '', icon: '', type: '', details: [] },
                    { order: 3, title: '', icon: '', type: '', details: [] },
                ]

            },
        }
    }
}