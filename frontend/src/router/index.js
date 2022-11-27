import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TaskView from './../views/TaskView.vue';
import StepView from './../views/StepView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/:taskKey',
      component: TaskView,
      props: true,
      children: [
        { path: ':stepKey', component: StepView, props: true },
      ]
    },
    {
      path: '/:notFound(.*)', component: null
    }
  ]
})

export default router
