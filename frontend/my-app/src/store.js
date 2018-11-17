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
    setInversionGlobal (state, data) {
      for (let i = 0; i<state.user.inversiones.length; i++) {
        if (state.inversiones[i]._id == data.idInversion) {
          state.inversiones[i].invertido = parseInt(state.inversiones[i].invertido) + parseInt(data.monto)
          state.inversiones[i].estado = data.estado
        }
      }
    },
    setInversion (state, data) {
      for (let i = 0; i<state.user.inversiones.length; i++) {
        if (state.user.inversiones[i]._id == data.idInversion) {
          state.user.inversiones[i].invertido = parseInt(state.user.inversiones[i].invertido) + parseInt(data.monto)
          state.user.inversiones[i].estado = 1
        }
      }
    },
    addSolicitud (state, solicitud) {
      if(!state.user.solicitudes) {
        state.user.solicitudes = []
      }
      state.user.solicitudes.push(solicitud)
    },
    addInversion (state, inversion) {
      if (!state.user.inversiones) {
        state.user.inversiones = []
      }
      state.user.inversiones.push(inversion)
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
