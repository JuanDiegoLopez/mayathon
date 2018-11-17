import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    connect: false,
    dialog: false,
    inversionSelected: null,
    user: null,
    inversiones: null
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    toggleModal (state) {
      state.dialog = !state.dialog
    },
    setInversion (state, inversion) {
      state.inversionSelected = inversion
    },
    setUser (state, user) {
      state.user = user
      state.connect = !state.connect
    },
    setInversiones (state, inversiones) {
      state.inversiones = inversiones
    }
  },
  actions: {

  }
})

export default store
