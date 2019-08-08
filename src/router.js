import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/search/:id',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    }
  ]
})
