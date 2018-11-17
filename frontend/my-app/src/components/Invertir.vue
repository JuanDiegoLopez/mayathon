<template>
  <v-container>
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
    <modal-inversion :dialog="false"></modal-inversion>
  </v-container>  
</template>

<script>
import Inversion from './inversiones/Inversion'
import ModalInversion from './modals/ModalInversion'

export default {
  components: {
    Inversion,
    ModalInversion
  }
}
</script>

<style>

</style>
