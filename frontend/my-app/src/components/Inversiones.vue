<template>
  <v-container v-if="user.inversiones && user.inversiones.length">
    <h1 class="display-1">Tus inversiones</h1>
    <br>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="px-3 mb-4"  v-for="inversion in user.inversiones" :key="inversion._id">
        <inversion :inversion="inversion"></inversion>
      </v-flex>
    </v-layout>
    <modal-inversion :type="1"></modal-inversion>
  </v-container>
  <v-container v-else class="text-xs-center">
    <h1 class="display-1">Aún no has invertido en ningun proyecto</h1>
    <br>
    <img src="../assets/sad.png" alt="imagen" width="300px">
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import Inversion from './inversiones/Inversion'

import ModalInversion from './modals/ModalInversion'

export default {
  components: {
    Inversion,
    ModalInversion
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
