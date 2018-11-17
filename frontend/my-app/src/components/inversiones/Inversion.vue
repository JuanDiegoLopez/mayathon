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
        <span>Conseguido <strong>${{inversion.invertido |coins}}</strong></span>
      </v-flex>
      <v-flex xs6>
        <span>Quedan <strong>{{tiempoRestante}} dias</strong></span>
      </v-flex>
      <v-progress-linear v-model="porcetanjeInvertido"></v-progress-linear>
      <span class="ma-auto blue--text">{{porcetanjeInvertido}}% financiado</span>
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
      return fechaFin.diff(moment(),'days')
      
    },
    porcetanjeInvertido () {
      this.inversion.invertido=1000000
     const financiado = ((this.inversion.invertido)/this.inversion.monto5)*100
     return financiado.toFixed(2); 
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    }
  },
  filters:{
    coins(value){
      return value.toLocaleString()
    }

  }
}
</script>

