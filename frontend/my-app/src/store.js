import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'Title',
    dialog: false,
    inversion: null
  },
  getters: {
    
  },
  mutations: {
    toggleModal (state) {
      state.dialog = !state.dialog
    },
    setInversion (state, inversion) {
      state.inversion = inversion
    }
  },
  actions: {

  }
})

export default store
