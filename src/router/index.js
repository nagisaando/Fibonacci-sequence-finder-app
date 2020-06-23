import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculate from '../components/Calculate.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Calculate',
    component: Calculate
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
