<template>
  <v-container>
    <h1 class="display-1">Tus Solicitudes</h1>
    <br>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
      <v-flex xs12 sm6 md4 class="px-3 mb-4">
        <inversion></inversion>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Inversion from './inversiones/Inversion'

export default {
  components: {
    Inversion
  }  
}
</script>

