<template>
  <v-dialog :value="dialog" width="500" v-if="inversionSelected && dialog">
    <v-card>
      <v-card-title class="headline blue darken-4 white--text" primary-title>
        {{inversionSelected.titulo}}
      </v-card-title>
      <v-card-text>
        <p>{{inversionSelected.descripcion}}</p>
        <v-divider></v-divider>
        <br>
        <h2><span class="title red--text text--lighten-1">Riesgo: </span>{{inversionSelected.riesgo | aproximar}} %</h2>
        <h2><span class="title blue--text text--darken-3">Meta: </span>$ {{inversionSelected.monto5 | coin}}</h2>
        <h2><span class="title blue--text text--darken-3">Conseguido: </span>$ {{inversionSelected.invertido | coin}}</h2>
        <h2><span class="title blue--text text--darken-3"># Inversores: </span>$ {{inversionSelected.numeroInversores}}</h2>
        <h2><span class="title blue--text text--darken-3">Finaliza: </span>{{inversionSelected.fechaFin | fecha}}</h2>
      </v-card-text>
      <v-divider></v-divider>

      <v-layout row wrap>
        <v-flex xs12 class="px-3">
          <v-text-field type="number" v-model="monto" label="Monto a invertir" prefix="$"></v-text-field>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="toggleModal()">
          Cancelar
        </v-btn>
        <v-btn color="success" flat @click="invertir()">
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
          const alert = {
            type: 'error',
            message: response.data.message,
            show: true
          }
          this.changeAlert(alert)
          return
        }
        this.$store.commit('addInvercion', this.inversion)
        this.toggleModal()
        this.$router.push('inversiones')
      } catch (error) {
        const alert = {
            type: 'error',
            message: 'Ha ocurrido un error',
            show: true
          }
          this.changeAlert(alert)
          this.toggleModal()
      }
    },
    changeAlert (alert) {
      this.$emit('changeAlert', alert) 
    }
  }
}
</script>
