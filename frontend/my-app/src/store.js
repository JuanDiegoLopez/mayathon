import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    connect: false,
    dialog: false,
    inversionSelected: null,
    user: null,
    inversiones: [],
    isLoading: false
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
      state.connect = true
    },
    setInversiones (state, inversiones) {
      state.inversiones = inversiones
    },
    addInversion (state, inversion) {
      state.user.solicitudes.push(inversion)
    },
    disconnect (state) {
      state.user = null
      state.connect = false
    },
    toggleLoader (state) {
      state.isLoading = !state.isLoading
    }
  }
})

export default store
