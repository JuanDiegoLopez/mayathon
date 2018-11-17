<template>
    <v-layout row wrap >
      <v-flex lg8 offset-lg2 >
           <h1>Solicitar inversion</h1>
            <form>
              <v-text-field
                v-model="titulo"
                label="Titulo del proyecto"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
               
              <v-select
          :items="categoria"
          label="Categoria"
        ></v-select>
            <v-layout row wrap>
                <v-flex xs10 >
                    <v-text-field
                    class="mr-4"
                v-model="imagen"
                label="Cargar imagen"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            
                </v-flex>
                <v-flex xs2>
                     <v-btn block >cargar</v-btn>
                </v-flex>
            </v-layout>

        
        <v-text-field
                v-model="monto"
                label="Monto"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              
               
            <v-btn to="/inicio" >Cancelar</v-btn>
            <v-btn color="primary" dark @click="dialog = true" > Publicar </v-btn>
            </form>
           
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

