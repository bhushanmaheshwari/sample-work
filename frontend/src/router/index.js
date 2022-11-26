import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import StrategyView from './../views/StrategyView.vue';
import StrategyDeepdiveView from './../views/StrategyDeepdiveView.vue';
import StrategyHighlevelView from './../views/StrategyHighlevelView.vue';
import StrategyNeedView from './../views/StrategyNeedView.vue';
import WorkSmarterView from './../views/WorkSmarterView.vue';
import WorkSmarterDetailView from './../views/WorkSmarterDetailView.vue';
import WorkSmarterDeepdiveView from './../views/WorkSmarterDeepdiveView.vue';



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
      path: '/strategy',
      component: StrategyView,
      props: true,
      children: [
        { path: 'need', component: StrategyNeedView },
        { path: 'highlevel', component: StrategyHighlevelView },
        { path: 'deepdive', component: StrategyDeepdiveView },
      ]
    },
    {
      path: '/worksmarter',
      component: WorkSmarterView,
      props: true,
      children: [
        { path: 'highlevel', component: WorkSmarterDetailView },
        { path: 'deepdive', component: WorkSmarterDeepdiveView }
      ]
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:notFound(.*)', component: null
    }
  ]
})

export default router
