import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import WorkSampleView from '../views/WorkSampleView.vue';
import TaskDetail from '../components/TaskDetail.vue';
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
      path: '/worksample/:id',
      component : WorkSampleView,
      children: [{
        path: 'tasks/:taskid', component: TaskDetail
      }]
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:notFound(.*)', component: null
    }
  ]
})

export default router
