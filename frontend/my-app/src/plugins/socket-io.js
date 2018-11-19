import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client'

import config from '../services/config'
import store from '../store'

const socket = io(config.apiUrl)

Vue.use(VueSocketio, socket, store)

socket.on('nuevaSolicitud', (solicitud) => {
  console.log('Llego una solicitud nueva!')
  store.commit('addInversionGlobal', solicitud)
})

socket.on('actualizarEstadoInversion', (data) => {
  console.log('Han invertido en una solicitud!')
  store.commit('setInversionGlobal', data)
})

socket.on('actuEstadoInversion', (data) => {
  store.commit('setInversion', data)
})