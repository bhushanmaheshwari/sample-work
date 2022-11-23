import { createStore } from 'vuex';
import tasksModule from './tasks/index.js';

const store = createStore({
    modules: {
        tasks: tasksModule
    }
});

export default store;