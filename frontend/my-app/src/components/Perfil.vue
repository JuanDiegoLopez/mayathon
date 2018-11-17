<template>
 <v-container fluid>
  <v-layout row wrap >
    <v-flex md4 offset-md0 class="text-xs-center mb-2">
        <img src="https://picsum.photos/510/300?random" class="perfil">
        <br>
        <br>
        <v-btn>Cambiar imagen</v-btn>
    </v-flex>  
    <v-flex md8 class="text-xs-center">
        <h2>INFORMACIÓN PERSONAL</h2>
        <v-alert :value="alert.show" :type="alert.type">
          {{alert.message}}
        </v-alert>
        <br>
        <v-list two-line subheader>
          <v-layout row wrap>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Nombre</v-list-tile-title>
                  <v-list-tile-sub-title>{{user.nombre}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Apellidos</v-list-tile-title>
                  <v-list-tile-sub-title>{{user.apellido}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Correo</v-list-tile-title>
                  <v-list-tile-sub-title>{{user.correo}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Celuar</v-list-tile-title>
                  <v-list-tile-sub-title>(+57) {{user.celular}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select v-model="userUpdated.corriente1" label="Monto promedio en cuenta corriente" :items="corriente" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select v-model="userUpdated.ahorros6" label="Monto promedio en cuenta de ahorros " :items="ahorro" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
             <v-select v-model="userUpdated.porceTasa8" label="Tasa de pago en porcentaje del ingreso disponible " :items="tasa" item-text="nombre"
          item-value="valor" ></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
             <v-text-field type="number" v-model="userUpdated.residenciaDesde11" label="Antiguedad en residencia actual"></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
               <v-text-field  type="number" v-model="userUpdated.edad13" label="Edad" required></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.historia3" label="Historia crediticia" :items="historia" item-text="nombre"
          item-value="valor" ></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.empleoDesde7" label="Antiguedad en el empleo actual" :items="antiguedad_Empleo" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.civilSexo9" label="Estado civil" :items="estado_civil" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.propiedades12" label="Propiedades" :items="propiedades" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.planesPago14" label="Deudas en" :items="deudas" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.residencia15" label="Tipo de vivienda" :items="vivienda" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.trabajo17" label="Trabajo" :items="trabajo" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-text-field type="number" v-model="userUpdated.depende18" label="Numero de personas dependientes"></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select v-model="userUpdated.extranjero20" label="Extranjero" :items="extranjero" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12>
              <v-btn color="success" block @click="actualizarPerfil()">Guardar cambios</v-btn>
            </v-flex>
          </v-layout>
          
        </v-list>
    </v-flex> 
</v-layout>

 </v-container>
</template>

<script>
import {mapState} from 'vuex'
import userService from '../services/user'

export default {
  created() {
    if (this.user.historia3 != null) {
      this.userUpdated = this.user
    }
  },
  data () {
    return {
      alert: {
        show: false,
        type: 'error',
        message: ''
      },
      userUpdated: {},
      corriente: [
        {nombre: 'No tiene monto', valor: 0},
        {nombre: 'Entre 0 y $300.000', valor: 1},
        {nombre: 'Mayor o igual que $300.000', valor: 2},
        {nombre: 'No cuento con cuenta corriente', valor:3}
      ],
      ahorro: [
        {nombre: 'Menor que $185.000', valor: 0},
        {nombre: 'Entre $185.000 y $925.000', valor: 1},
        {nombre: "Entre $925.000 y $1'850.000", valor:2},
        {nombre: "Mayor o igual que $1'850.000", valor:3},
        {nombre: 'No cuento con cuenta de ahorro', valor:4}
      ], 
      tasa:[
        {nombre: '25%', valor: 1},
        {nombre: '50%', valor: 2},
        {nombre: '75%', valor: 3},
        {nombre: '100%', valor: 4}
      ],
      edad:0,
      historia:[
        {nombre: 'Sin créditos tomados / todos los créditos pagados debidamente', valor: 0},
        {nombre: 'Todos los créditos en banco reembolsados ​​debidamente ', valor: 1},
        {nombre: 'Créditos existentes reembolsados ​​debidamente hasta ahora ', valor: 2},
        {nombre: 'retraso en el pago en el pasado ', valor: 3},
        {nombre: 'cuenta crítica / otros créditos existentes', valor: 4}
      ],
      antiguedad_Empleo: [
        {nombre: 'Desempleado', valor: 0},
        {nombre: 'Menos de un año', valor: 1},
        {nombre: 'Entre 1 y 4 años', valor:2},
        {nombre: 'Entre 4 y 7 años', valor: 3},
        {nombre: 'Mayor o igual a 7 años', valor: 4}
      ],
      estado_civil:[
        {nombre: 'Hombre: divorciado / separado', valor: 0},
        {nombre: 'Mujer: divorciado / separado / casado', valor: 1},
        {nombre: 'Hombre: soltero', valor: 2},
        {nombre: 'Hombre: casado / viudo', valor:3},
        {nombre: 'Mujer: soltera', valor: 4}, 
      ],
      propiedades: [ 
        {nombre: 'Bienes inmubles', valor: 0},
        {nombre: 'Si no en la anterior: Acuerdo de ahorro sociedad de construcción / seguro de vida', valor:1},
        {nombre: 'Si no en las anteriores : Automovil u otros', valor: 2},
        {nombre: 'No tiene propiedades', valor: 3}
      ],
      deudas: [
        {nombre: 'Bancos', valor: 0},
        {nombre: 'Tiendas',valor: 1},
        {nombre: 'Ninguno', valor: 2}
      ],
      vivienda:[
        {nombre: 'Alquiler', valor: 0},
        {nombre: 'Propio', valor: 1},
        {nombre: 'Gratis', valor: 2}
      ],
      trabajo:[
        {nombre: 'Desempleado / no calificado - no residente ', valor: 0},
        {nombre: 'No calificado - residente ', valor: 1},
        {nombre: 'Empleado calificado / oficial', valor: 2},
        {nombre: 'Gerencia / trabajador independiente / empleado / funcionario altamente calificado ', valor: 3}
      ],
      extranjero:[
        {nombre: 'Si', valor: 0},
        {nombre: 'No', valor: 1}
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async actualizarPerfil () {
      this.alert.show = false
      try {
        this.userUpdated._id = this.user._id
        this.userUpdated.nombre = this.user.nombre
        this.userUpdated.celular = this.user.celular
        this.userUpdated.correo = this.user.correo
        const response = await userService.completarPerfil(this.userUpdated)
        if (!response.data.estado) {
          this.alert.type = 'error'
          this.alert.message = response.data.mensaje
          this.alert.show = true
          return
        }
        this.$store.commit('setUser', this.userUpdated)
        this.alert.type = 'success'
        this.alert.message = 'Cambios guardados exitosamente'
        this.alert.show = true
      } catch (error) {
        this.alert.type = 'error'
          this.alert.message = 'Ha ocurrido un error'
          this.alert.show = true
          return
      }
    }
  }
}
</script>

<style>
  .perfil{
      width: 200px;
      height: 200px;
      border-radius: 150px;
  }
</style>
