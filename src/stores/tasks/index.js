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
            isHomePage : true,
            bc: [
                { text: "Home", route: "/", class: "" },
                { text: "Work Smarter", route: "", class: "is-active" },
            ],
            task1: {
                title: 'Strategize',
                description: 'Faced with an existing system that uses a coupled templating engine like <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">Smarty</span> or <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">Twig</span> how would you go about planning and executing a strategy for <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">migrating</span> the product to a <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">headless</span> frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.',
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
                description: 'How can we <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">double</span> the <span class="tag is-size-5 has-background-link-light has-text-weight-semibold">productivity</span> of our engineers (without trading job satisfaction, system availability, quality, or security)?',
                tags: ['double', 'productivity'],
                homepageImage: '/assets/home/hero-bg-home.jpeg',
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