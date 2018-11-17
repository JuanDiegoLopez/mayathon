<template>
 <v-layout row wrap >
      <v-flex xs6 offset-xs3 xs12 sm4 offset-sm4 v-if ="show1==false">
           <v-card>
        <v-container fill-height fluid>
        

 <form >
 <h1>Login</h1>
    <v-text-field
      v-model="Usuario"
      label="Usuario"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
     <v-text-field
            :append-icon="show ? 'visibility_off' : 'visibility'"
             :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            v-model="Contraseña"
            name="input-10-2"
            label="Contraseña"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show = !show"
    ></v-text-field>
    
    <v-btn to="/inicio" >login</v-btn>
    <v-btn @click="show1=true" >Registrarse</v-btn>
  </form>
        </v-container>
           </v-card>
      </v-flex>

<v-flex xs6 offset-xs3 xs12 sm7 offset-sm3 v-if ="show1==true">
           <v-card>
        <v-container fill-height fluid>
          <form>
              <h1>Formulario de Registro</h1>
              <v-text-field
                v-model="Nombre"
                label="nombre"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="Cedula"
                label="Cedula"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                      :append-icon="show ? 'visibility_off' : 'visibility'"
                      :rules="[rules.required, rules.min]"
                      :type="show ? 'text' : 'password'"
                      v-model="Contraseña"
                      name="input-10-2"
                      label="Contraseña"
                      hint="At least 8 characters"
                      value="wqfasds"
                      class="input-group--focused"
                      @click:append="show = !show"
              ></v-text-field>
            
              
              <v-btn  @click="show1=false" >Guardar Registro</v-btn>
              <v-btn @click="show1=false" >Cancelar</v-btn>

            </form>
        </v-container>
           </v-card>
          </v-flex>

 </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        Usuario:null,
        Contraseña:null,
        show: false,
        show1:false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    }
  }

</script>
<style>

.borde{
background-color: #7777

}
</style>



