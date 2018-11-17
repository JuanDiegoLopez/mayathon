<template>
  <v-dialog :value="dialog" width="500" v-if="inversionSelected && dialog">
    <v-card>
      <v-card-title class="headline  darken-4 white--text col letra" primary-title>
        {{inversionSelected.titulo}}
      </v-card-title>
      <v-card-text>
        <p>{{inversionSelected.descripcion}}</p>
        <v-divider></v-divider>
        <br>
        <h2><span class="title col-red text--lighten-1">Riesgo: </span>{{inversionSelected.riesgo | aproximar}} %</h2>
        <v-divider></v-divider>
        <h2> &nbsp;</h2>
        <h2><span class="title col-blue text--darken-3">Meta: </span>$ {{inversionSelected.monto5 | coin}}</h2>
        <h2><span class="title col-blue  text--darken-3">Conseguido: </span>$ {{inversionSelected.invertido | coin}}</h2>
         <h2><span class="title col-blue  text--darken-3">Número inversores: </span> {{inversionSelected.numeroInversores}}</h2>
        <v-divider></v-divider>
        <h2> &nbsp;</h2>
         <h2><span class="title col-blue  text--darken-3">Finaliza: </span>{{inversionSelected.fechaFin | fecha}}</h2>
      
      </v-card-text>
      <v-divider></v-divider>

      <v-layout row wrap>
        <v-flex xs12 class="px-3">
          <v-text-field type="number" v-model="monto" label="Monto a invertir" prefix="$" class="azul"></v-text-field>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="toggleModal()">
          Cancelar
        </v-btn>
        <v-btn class="verd" flat @click="invertir()">
          Invertir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'

import inversionesServices from '../../services/inversiones'

export default {
  data () {
    return {
      monto: 0
    }
  },
  computed: {
    ...mapState(['dialog', 'inversionSelected', 'user'])
  },
  filters: {
    aproximar (value) {
      return value.toFixed(9) * 100;
    },
    coin (value) {
      return value.toLocaleString()
    },
    fecha (value) {
      return moment(value).format('dddd DD MMMM [de] YYYY')
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    },
    async invertir () {
      try {
        const inversion = {
          monto: this.monto,
          idInversion: this.inversionSelected._id,
          idInversor: this.user._id
        }
        const response = await inversionesServices.hacerInversion(inversion)
        if (!response.data.estatus) {
          console.log(response)
          return
        }
        this.$store.commit('addInvercion', this.inversion)
        this.toggleModal()
        this.$router.push('/inversiones')
      } catch (error) {
          this.toggleModal()
      }
    }
  }
}
</script>

<style scoped>
.col{
  background-color: #3d4e69;
}
.col-blue {
color: #3d4e69;
}
.col-red{
  color: #b54644;
}
.letra{
   font-family: 'Lobster', cursive !important;
}
.verd{
  color:#215d23 !important;
}
</style>

