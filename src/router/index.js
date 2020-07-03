import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Red'
  },
  {
    path: '/Red',
    name: 'Red',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Red.vue'),
    props: { default: true, sidebar: false }
  },
  {
    path: '/Yellow',
    name: 'Yellow',
    component: () => import(/* webpackChunkName: "about" */ '../components/Yellow.vue'),
    props: { default: true, sidebar: false }
  },
  {
    path: '/Green',
    name: 'Green',
    component: () => import(/* webpackChunkName: "about" */ '../components/Green.vue'),
    props: { default: true, sidebar: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
