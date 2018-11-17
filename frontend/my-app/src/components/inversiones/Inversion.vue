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
        <span>Conseguido <br> <strong>${{inversion.invertido | coins}}</strong></span>
      </v-flex>
      <v-flex xs6>
        <span>Quedan <br><strong>{{tiempoRestante}} dias</strong></span>
      </v-flex>
      <v-progress-linear v-model="porcetanjeInvertido" :color="color"></v-progress-linear>
      <span class="ma-auto blue--text">{{porcetanjeInvertido}}% financiado</span>
    </v-layout>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat  @click="toggleModal()">Más detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: ['inversion'],
  data () {
    return {
      valueDeterminate: 50,
      financiado:0
    }
  },
  computed: {
    tiempoRestante () {
      const fechaFin = moment(this.inversion.fechaFin)
      return fechaFin.diff(moment(),'days')
      
    },
    porcetanjeInvertido () {
      this.inversion.invertido=3000710
     const financiado = ((this.inversion.invertido)/this.inversion.monto5)*100
     this.financiado = financiado;
     return financiado.toFixed(2); 
    },
    color () {
        if (this.financiado == 0) return 'red'
        if (this.financiado < 25 && this.financiado > 0 ) return 'orange'
        if (this.financiado > 25 && this.financiado < 50 ) return 'green'
        if (this.financiado < 50 && this.financiado < 75 ) return 'teal'
        if (this.financiado > 75 ) return 'indigo'
  }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    },
     },  
  filters:{
    coins(value){
      return value.toLocaleString()
    }

  }
}
</script>

