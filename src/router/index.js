import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResourcesViewVue from '@/views/ResourcesView.vue'
import ChatView from '@/views/ChatView.vue'
import ServicesViewVue from '@/views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/services',
    name:'services',
    component: ServicesViewVue
  },
  {
    path:'/resources',
    name:'resources',
    component: ResourcesViewVue
  },
  {
    path:'/chat',
    name:'chat',
    component: ChatView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
