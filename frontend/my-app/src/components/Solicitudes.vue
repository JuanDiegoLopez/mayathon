<template>
  <div>
    <v-container v-if="user.solicitudes && user.solicitudes.length">
      <h1 class="display-1">Tus solicitudes</h1>
      <br>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 class="px-3 mb-4"  v-for="solicitud in user.solicitudes" :key="solicitud._id">
          <inversion :inversion="solicitud"></inversion>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else class="text-xs-center">
      <h1 class="display-1">Aún no has realizado ninguna solicitud</h1>
      <br>
      <img src="../assets/sad.png" alt="imagen" width="300px">
    </v-container>
    <modal-inversion :type="2"></modal-inversion>
  </div>
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

