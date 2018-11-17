import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'


import Login from './components/Login'
import Home from './components/Home'
import Invertir from './components/Invertir'
import Inversiones from './components/Inversiones'
import Solicitar from './components/Solicitar'
import Solicitudes from './components/Solicitudes'
import Perfil from './components/Perfil'
import Landing from './components/Landing'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Landing, name: 'landing'},
  {path: '/inicio', component: Home, name: 'home'},
  {path: '/invertir', component: Invertir, name: 'invertir'},
  {path: '/solicitar', component: Solicitar, name: 'solicitar'},
  {path: '/inversiones', component: Inversiones, name: 'inversiones'},
  {path: '/solicitudes', component: Solicitudes, name: 'solicitudes'},
  {path: '/perfil', component: Perfil, name: 'perfil'},
  {path: '/login', component: Login, name: 'login'},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path !== '/login') {
    if (!store.getters.getUser) return next('/') 
    next()
  } else {
    next()
  }
})

export default router
