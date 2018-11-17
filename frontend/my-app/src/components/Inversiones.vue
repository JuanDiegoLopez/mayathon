<template>
  <v-container v-if="user.inversiones.length">
    <h1 class="display-1">Tus inversiones</h1>
    <br>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="px-3 mb-4"  v-for="inversion in inversiones" :key="inversion._id">
        <inversion :inversion="inversion"></inversion>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <h1 class="display-1">Auú no has invertido en ningun proyecto :(</h1>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import Inversion from './inversiones/Inversion'

export default {
  components: {
    Inversion
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
