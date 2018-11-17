import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client'

import config from '../services/config'
import store from '../store'

const socket = io(config.apiUrl)

Vue.use(VueSocketio, socket, store)

socket.on('nuevaSolicitud', (solicitud) => {
  store.getters.addInversion(solicitud)
})
