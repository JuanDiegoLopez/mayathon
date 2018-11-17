<template>
  <v-container v-if='user'>
    <h1 class="display-2">Bienvenido, {{user.nombre}}</h1>
    <br>
    <h3 class="headline">¿Qué deseas hacer hoy?</h3>
    <br>
    <v-layout row wrap>
      <v-flex md3 offset-md3 sm6 xs12 class="px-2">
        <v-btn color="success" block class="btn title">
          Solicitar
        </v-btn>
      </v-flex>
      <v-flex md3 sm6 xs12 class="px-2">
        <v-btn color="success" block class="btn title">
          Invertir
        </v-btn>
      </v-flex>
      <v-flex md3 offset-md3 sm6 xs12 class="px-2">
        <v-btn color="success" block class="btn title">
          Mis solicitudes
        </v-btn>
      </v-flex>
      <v-flex md3 sm6 xs12 class="px-2">
        <v-btn color="success" block class="btn title">
          Mis inversiones
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default{
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>
  .btn {
   height: 60px;
   text-transform: capitalize;
  }
</style>
