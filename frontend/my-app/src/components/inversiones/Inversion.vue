<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{inversion.titulo}}</h3>
        <div>{{inversion.descripcionCorta}}</div>
      </div>
    </v-card-title>
    <v-layout row wrap class="pa-2 text-xs-center">
      <v-flex xs6>
        <span>Conseguido <strong>{{inversion.invertido}}</strong></span>
      </v-flex>
      <v-flex xs6>
        <span>Quedan <strong></strong></span>
      </v-flex>
      <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
      <span class="ma-auto blue--text">50% financiado</span>
    </v-layout>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="orange" @click="toggleModal()">Más detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: ['inversion'],
  data () {
    return {
      valueDeterminate: 50
    }
  },
  computed: {
    tiempoRestante () {
      const fechaFin = moment(this.inversion.fechaFin)
      return moment().diff(fechaFin)
    },
    porcetanjeInvertido () {

    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

