<template>
  <v-container v-if="user && user.historia3 != null">
    <h1 class="display-1">Solicitar inversión</h1>
    <v-alert :value="alert.show" :type="alert.type">
      {{alert.message}}
    </v-alert>
    <v-layout row wrap>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field v-model="solicitud.titulo" label="Titulo del proyecto" required></v-text-field>
      </v-flex>
      <v-flex md8 sm12 class="pa-2">
        <v-text-field v-model="solicitud.descripcionCorta" label="Descripcion corta" required></v-text-field>
      </v-flex>
      <v-flex md12 sm12 class="pa-2">
        <v-text-field v-model="solicitud.descripcion" label="Descripción larga" requerid></v-text-field>
      </v-flex>
      <v-flex md8 sm12 class="pa-2">
        <v-text-field v-model="solicitud.modelo" label="Modelo de negocio" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-select v-model="solicitud.categoria4" :items="categorias" item-text="nombre" item-value="valor" label="Categoria"></v-select>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field type="number" v-model="solicitud.duracion2" label="Tiempo de retorno en meses" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field type="number" v-model="solicitud.rentabilidad" label="Rentabilidad (%)" required></v-text-field>
      </v-flex>
      <v-flex md4 sm12 class="pa-2">
        <v-text-field type="number" v-model="solicitud.monto5" label="Monto $" required></v-text-field>
      </v-flex>
      <v-flex md3 sm12 class="pa-2">
        <v-select v-model="solicitud.fiador10" :items="fiador" item-text="nombre" item-value="valor" label="Tiene fiador"></v-select>
      </v-flex>
      <v-flex md3 sm12 class="pa-2" v-if="solicitud.fiador10">
        <v-text-field type="number" v-model="solicitud.cedulaFiador" label="Cedula del fiador" required></v-text-field>
      </v-flex>
      <v-flex md6 sm12 class="pa-2" v-if="solicitud.fiador10">
        <v-text-field v-model="solicitud.nombreFiador" label="Nombre del fiador" required></v-text-field>
      </v-flex>
      </v-layout>

      <v-layout> 
        <v-flex md3 sm12 offset-md3 class="pa-2">
        <v-btn to="/inicio" block>Cancelar</v-btn>
      </v-flex>
      <v-flex md3 sm12  class="pa-2">
        <v-btn color="primary" @click="dialog = true" block>Solicitar</v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">¿Esta seguro que desea publicar su solicitud?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-2"  flat="flat"  @click="dialog = false"> Cancelar </v-btn>
          <v-btn  color="cyan darken-2" flat="flat"  @click="publicar()" > Publicar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
  <v-container v-else class="text-xs-center">
    <h2 class="display-1">Primero completa tu perfil para hacer tu primera solicitud</h2>
    <br>
    <img src="../assets/sad.png" alt="carita" width="300px">
    <br>
    <br>
    <v-btn to="/perfil">Completar perfil</v-btn>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import solicitudesService from '../services/solicitudes'

export default {
  created() {
    if (this.user._id) this.solicitud.id_usuario = this.user._id
  },
  data(){
      return{
          dialog: false,
          alert: {
            show: false,
            type: 'error',
            message: ''
          },
          solicitud: {
            id_usuario: '',
            titulo: '',
            descripcionCorta: '',
            descripcion: '',
            modelo: '',
            categoria4: '',
            duracion2: '',
            rentabilidad: '',
            monto5: 0,
            fiador10: 0,
            nombreFiador: '',
            cedulaFiador: '',
            numeroInversores: 0
          },
          fiador: [
            {nombre: 'No tengo fiador', valor: 0},
            {nombre: 'Tengo un acompañante', valor: 1},
            {nombre: 'Tengo fiador', valor: 2},
          ],
          categorias:[
            {nombre: 'cultura', valor: 0},
            {nombre: 'tecnologia', valor: 1},
            {nombre: 'gastronomia', valor: 2},
            {nombre: 'educacion', valor: 3}
          ]
      }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async publicar () {
      try {
        this.$store.commit('toggleLoader')
        const response = await solicitudesService.hacerSolitud(this.solicitud)
        if (!response.data.estado) {
          const alert = {
            type: 'error',
            message: response.data.mensaje,
            show: true
          }
          this.alert = alert
          return
        }
        this.$store.commit('addSolicitud', this.solicitud)
        this.$store.commit('toggleLoader')
        this.$router.push('/solicitudes')
      } catch (error) {
        this.alert.type = 'error'
        this.alert.message = 'Ha ocurrido un error' 
        this.alert.show = true
        console.log(error)
        this.$store.commit('toggleLoader')
      }
      this.dialog = false
    }
  }
}
</script>

<style>

</style>

