<template>
  <v-container v-if="user && user.edad">
    <h1 class="display-1">Solicitar inversión</h1>
    <v-alert :value="alert.show" :type="alert.type">
      {{alert.message}}
    </v-alert>
    <v-layout row wrap>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field v-model="titulo" label="Titulo del proyecto" required></v-text-field>
      </v-flex>
      <v-flex md8 sm12 class="pa-2">
        <v-text-field v-model="descripcion" label="Descripcion" required></v-text-field>
      </v-flex>
      <v-flex md8 sm12 class="pa-2">
        <v-text-field v-model="modelo" label="Modelo de negocio" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-select :items="categoria" label="Categoria"></v-select>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field v-model="duracion" label="Tiempo de retorno en meses" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field v-model="rentabilidad" label="Rentabilidad" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field v-model="monto" label="Monto $" required></v-text-field>
      </v-flex>
      <v-flex md6 sm12 class="pa-2">
        <v-text-field v-model="nombreFiador" label="Nombre del fiador" required></v-text-field>
      </v-flex>
      <v-flex md6 sm12 class="pa-2">
        <v-text-field v-model="cedulaFiador" label="Cedula del fiador" required></v-text-field>
      </v-flex>
      <v-flex sm3 xs6 offset-sm3 class="pa-2">
        <v-btn to="/inicio" block>Cancelar</v-btn>
      </v-flex>
      <v-flex sm3 xs6 class="pa-2">
        <v-btn color="primary" @click="dialog = true" block>Solicitar</v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">¿Esta seguro que desea publicar su solicitud?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-2"  flat="flat"  @click="dialog = false"> Cancelar </v-btn>
          <v-btn  color="cyan darken-2" flat="flat"  to="/solicitudes" > Publicar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
  <v-container v-else class="text-xs-center">
    <h2 class="display-1">Primero completa tu perfil para hacer tu primera solicitud</h2>
    <br>
    <img src="../assets/triste.png" alt="carita" width="150px">
    <br>
    <br>
    <v-btn to="/perfil">Completar perfil</v-btn>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import solicitudesService from '../services/solicitudes'

export default {
  data(){
      return{
          dialog: false,
          alert: {
            show: false,
            type: '',
            message: ''
          },
          solicitud: {
            titulo: '',
            descripcion: '',
            modelo: '',
            categoria: '',
            duracion: '',
            rentabilidad: '',
            monto: 0,
            nombreFiador: '',
            cedulaFiador: ''
          }
      }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async publicar () {
      try {
        const response = await solicitudesService.hacerSolitud(this.solicitud)
        this.alert.type = 'success'
        this.alert.message = 'Solicitud publicada exitosamente' 
        this.alert.show = true
      } catch (error) {
        this.alert.type = 'error'
        this.alert.message = 'Ha ocurrido un error' 
        this.alert.show = true
      }
    }
  }

}
</script>

<style>

</style>

