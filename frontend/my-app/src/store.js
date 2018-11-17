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
    setInversionSelected (state, inversion) {
      state.inversionSelected = inversion
    },
    setUser (state, user) {
      state.user = user
      state.connect = true
    },
    setInversiones (state, inversiones) {
      state.inversiones = inversiones
    },
    addInversionGlobal (state, inversion) {
      state.inversiones.push(inversion)
    },
    setInversionGlobal (state, id, monto) {
      for (let i in state.inversiones) {
        if (state.inversiones[i]._id == id) {
          state.inversiones[i].monto = monto
          state.inversiones[i].estado = 1
        }
      }
    },
    addSolicitud (state, solicitud) {
      state.user.solicitudes.push(solicitud)
    },
    addInversion (state, inversion) {
      state.user.addInversion.push(inversion)
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
