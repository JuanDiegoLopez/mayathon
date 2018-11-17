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
              <v-select label="Monto promedio en cuenta corriente"></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select label="Monto promedio en cuenta de ahorros"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Edad"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Historia crediticia"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Antiguedad en el empleo actual"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Estado civil"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Propiedades"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Deudas en"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Tipo de vivienda"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Trabajo"></v-select>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-text-field label="Numero de personas dependientes"></v-text-field>
            </v-flex>
            <v-flex sm6 xs12 class="px-3">
              <v-select label="Extranjero"></v-select>
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

}
</script>

<style>
  .perfil{
      width: 200px;
      height: 200px;
      border-radius: 150px;
  }
</style>
