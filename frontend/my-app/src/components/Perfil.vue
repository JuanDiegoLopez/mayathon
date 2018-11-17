<template>
 <v-container fluid>
<v-layout row wrap >
    <v-flex md4 offset-md0 class="text-xs-center">
        <img src="https://picsum.photos/510/300?random" class="perfil">
        <v-btn>Cambiar imagen</v-btn>
    </v-flex>  
    <v-flex md4 offset-md2 class="text-xs-center">
        <div> <v-list two-line subheader>
          <v-subheader>Informacion personal</v-subheader>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Nombre</v-list-tile-title>
              <v-list-tile-sub-title>Juan Diego</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>E-mail</v-list-tile-title>
              <v-list-tile-sub-title>JuanD@gmail.com</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> </div>
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
    
    width: 250px;
    height: 250px;
    border-radius: 150px;
}
</style>
