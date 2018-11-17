<template>
    <v-layout row wrap >
      <v-flex xs6 offset-xs3 xs12 sm4 offset-sm4 >
           <h1>Solicitar inversion</h1>
           <v-card>
        <v-container fill-height fluid>
            <form >
               
            <v-btn to="/inicio" >Cancelar</v-btn>
            <v-btn color="primary" dark @click="dialog = true" > Publicar </v-btn>
            </form>
        </v-container>
           </v-card>
      </v-flex>

      <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
        <v-card-title class="headline">¿Esta seguro que desea publicar su solicitud?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="grey darken-2"  flat="flat"  @click="dialog = false"> Cancelar </v-btn>

          <v-btn  color="cyan darken-2" flat="flat"  to="/solicitudes" > Publicar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
            dialog:false
        }
        
    }

}
</script>

<style>

</style>

