import Vue from 'vue'
import VueSocketio from 'vue-socket.io'

import config from '../services/config'
import store from '../store'

Vue.use(VueSocketio, config.apiUrl, store)