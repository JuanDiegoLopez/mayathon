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
        <br>
        <v-list two-line subheader>
          <v-layout row wrap>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Nombre</v-list-tile-title>
                  <v-list-tile-sub-title>Juan Diego</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Apellidos</v-list-tile-title>
                  <v-list-tile-sub-title>López</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Correo</v-list-tile-title>
                  <v-list-tile-sub-title>JuanD@gmail.com</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex sm6 xs12>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Celuar</v-list-tile-title>
                  <v-list-tile-sub-title>(+57) 3185022214</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select label="Monto promedio en cuenta corriente" :items="corriente" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select label="Monto promedio en cuenta de ahorros " :items="ahorro" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
             <v-select label="Tasa de pago en porcentaje del ingreso disponible " :items="tasa" item-text="nombre"
          item-value="valor" ></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
               <v-text-field  v-model="Edad" label="Edad" required></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Historia crediticia" :items="historia" item-text="nombre"
          item-value="valor" ></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Antiguedad en el empleo actual" :items="antiguedad_Empleo" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Estado civil" :items="estado_civil" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Propiedades" :items="propiedades" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Deudas en" :items="deudas" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Tipo de vivienda" :items="vivienda" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Trabajo" :items="trabajo" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-text-field label="Numero de personas dependientes"></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Extranjero" :items="extranjero" item-text="nombre"
          item-value="valor"></v-select>
            </v-flex>
            <v-flex xs12>
              <v-btn color="success" block>Guardar cambios</v-btn>
            </v-flex>
          </v-layout>
          
        </v-list>
    </v-flex> 
</v-layout>

 </v-container>
</template>

<script>
export default {
  data () {
    return {
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
        {nombre: '25%', valor: 0},
        {nombre: '50%', valor: 1},
        {nombre: '75%', valor: 2},
        {nombre: '100%', valor: 3}
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
