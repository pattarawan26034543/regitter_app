import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import regis from '../views/regis.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/regis',
      name: 'regis',
    component: regis
    },
    
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
