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
        <h2 v-if="this.type == 1"><span class="title green--text text--darken-1">Monto invertido: </span>$ {{inversionSelected.invertido | coin}}</h2>
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

      <v-layout row wrap v-if="this.type != 2">
        <v-flex xs12 class="px-3">
          <v-text-field type="number" v-model="monto" label="Monto a invertir" prefix="$" class="azul"></v-text-field>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="toggleModal()">
          Cerrar
        </v-btn>
        <v-btn v-if="this.type == 0" class="white--text" color="green" @click="invertir()">
          Invertir
        </v-btn>
        <v-btn v-if="this.type == 1" class="white--text" color="green" @click="invertir()">
          Añador inversion
        </v-btn>
        <v-btn color="red ligthen-2 white--text" v-if="this.type == 2 && this.inversionSelected.numeroInversores == 0">
          Eliminar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'

moment.locale('es')

import inversionesServices from '../../services/inversiones'

export default {
  props: ['type'],
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
      const temp = 0
      if (!value) return temp
      return value.toFixed(9) * 100;
    },
    coin (value) {
      value = parseInt(value)
      if (!value) return 0
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
        const data = {
          monto: this.monto,
          idInversor: this.user._id,
          idInversion: this.inversionSelected._id
        }
        this.$store.commit('toggleLoader')
        const response = await inversionesServices.hacerInversion(data)
        if (!response.data.estado) {
          console.log(response)
          return
        }

        this.inversionSelected.invertido = parseInt(this.inversionSelected.invertido) + parseInt(this.monto)
        console.log(this.inversionSelected.invertido) 
        if (this.inversionSelected.invertido >= this.inversionSelected.monto5) {
          this.inversionSelected.estado = 2
        }

        if (this.type == 0) {
          this.$store.commit('addInversion', this.inversionSelected)
        } else if (this.type == 1) {
          this.$store.commit('setInversion', data)
        }
        this.toggleModal()
        this.$store.commit('toggleLoader')
        this.$router.push('/inversiones')
      } catch (error) {
          this.toggleModal()
          this.$store.commit('toggleLoader')
          console.log(error)
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

