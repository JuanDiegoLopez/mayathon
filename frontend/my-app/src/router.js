import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Home from './components/Home'
import Invertir from './components/Invertir'
import Inversiones from './components/Inversiones'
import Solicitar from './components/Solicitar'
import Solicitudes from './components/Solicitudes'
import Perfil from './components/Perfil'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login, name: 'login'},
  {path: '/inicio', component: Home, name: 'home'},
  {path: '/invertir', component: Invertir, name: 'invertir'},
  {path: '/solicitar', component: Solicitar, name: 'solicitar'},
  {path: '/inversiones', component: Inversiones, name: 'inversiones'},
  {path: '/solicitudes', component: Solicitudes, name: 'solicitudes'},
  {path: '/perfil', component: Perfil, name: 'perfil'},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
