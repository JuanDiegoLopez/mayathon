<template>
  <div>
    <v-container v-if="inversiones.length">
      <h1 class="display-1">¿En qué quieres invertir?</h1>
      <v-layout row wrap>
        <v-flex md6 offset-md2 sm8 xs12>
          <v-text-field label="Buscar proyecto" class="pa-2"></v-text-field>
        </v-flex>
        <v-flex md2 sm4 xs12>
          <v-btn color="primary" block class="pa-2">
            <v-icon left>search</v-icon>
            Buscar
          </v-btn>
        </v-flex>
      </v-layout>
      <br>
      <v-alert :value="alert.show" :type="alert.type">
        {{alert.message}}
      </v-alert>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 class="px-3 mb-4" v-for="inversion in inversionesFiltradas" :key="inversion._id">
          <inversion :inversion="inversion"></inversion>
        </v-flex>
      </v-layout>
      <modal-inversion :dialog="false" @changeAlert="changeAlert"></modal-inversion>
    </v-container>
    <v-container v-else>
      <h1 class="display-1">Aún no se ha hecho solicitudes de inversion :(</h1>
    </v-container>  
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Inversion from './inversiones/Inversion'
import ModalInversion from './modals/ModalInversion'

export default {
  data () {
    return {
      alert: {
        type: 'error',
        show: false,
        message: ''
      }
    }
  },
  components: {
    Inversion,
    ModalInversion
  },
  computed: {
    ...mapState(['user', 'inversiones']),
      inversionesFiltradas () {
      const inversionesFiltradas = []
      for (let inversion of this.inversiones) {
        if (inversion.solicitante._id != this.user._id) inversionesFiltradas.push(inversion)
      }
      return inversionesFiltradas
    }
  },
  methods: {
    changeAlert (alert) {
      this.alert = alert
    }
  }
}
</script>

<style>

</style>
