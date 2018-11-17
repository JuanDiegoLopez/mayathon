<template >
  <div class="fondo">
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md4 offset-md4 class="login">
          <h1 v-show="!signUpShow">Iniciar sesión</h1>
          <h1 v-show="signUpShow">Registrarse</h1>
          <p class="red--text">{{message}}</p>
          <v-text-field v-show="signUpShow" v-model="name" label="Nombre" required></v-text-field>
          <v-text-field v-show="signUpShow" v-model="lastname" label="apellidos" required></v-text-field>
          <v-text-field v-show="signUpShow" v-model="phone" label="Celular" required></v-text-field>
          <v-text-field v-model="email" label="Correo electronico" required></v-text-field>
          <v-text-field 
                  :append-icon="show ? 'visibility_off' : 'visibility'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  v-model="password"
                  name="input-10-2"
                  label="Contraseña"
                  hint="At least 8 characters"
                  class="input-group--focused"
                  @click:append="show = !show"
                  @keyup.enter="signIn()"
          ></v-text-field>
          <v-text-field v-show="signUpShow"
                  :append-icon="show1 ? 'visibility_off' : 'visibility'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  v-model="repassword"
                  name="input-10-2"
                  label="Repetir contraseña"
                  hint="At least 8 characters"
                  class="input-group--focused"
                  @click:append="show1 = !show1"
          ></v-text-field>
          <v-layout row wrap>
            <v-flex xs6 class="pa-2">
              <v-btn block v-show="!signUpShow" @click="signUpShow = !signUpShow">Crear cuenta</v-btn>
              <v-btn block v-show="signUpShow" @click="signUpShow = !signUpShow">Volver</v-btn>
            </v-flex>
            <v-flex xs6 class="pa-2">
              <v-btn v-show="!signUpShow" block color="primary" @click="signIn()">Inciar sesión</v-btn>
              <v-btn block class="success" v-show="signUpShow" @click="signUp()">Registrarse</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>


<script>
  import userService from '../services/user'
  export default {
    data () {
      return {
        message: '',
        name: '',
        lastname: '',
        phone:'',
        email: '',
        password: '',
        repassword: '',
        signUpShow: false,
        show: false,
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },
    methods: {
      async signUp () {
        if (this.password != this.repassword) return this.message = 'Las contraseñas no coinciden'
        try {
          const response = await userService.signUp(this.name, this.lastname, this.phone, this.email, this.password)
          if (!response.data.estado) return this.message = response.data.mensaje
          const user = {
            _id: response.data.id_usuario,
            nombre: this.name,
            apellido: this.lastname,
            celular: this.phone,
            correo: this.email
          }
          this.$store.commit('setUser', user)
          this.$router.push('inicio')
        } catch (error) {
          this.message = 'Ha ocurrido un error'
        }
      },
      async signIn () {
        this.$store.commit('toggleLoader')
        try {
          const response = await userService.signIn(this.email, this.password)
          if (!response.data.estado) {
            this.message = response.data.mensaje
            this.$store.commit('toggleLoader')
            return
          }
          console.log(response)
          this.$store.commit('setUser', response.data.doc_usu)
          this.$store.commit('setInversiones', response.data.inversionesGlobales)
          this.$store.commit('toggleLoader')
          this.$router.push('inicio')
        } catch (error) {
          this.message = 'Ha ocurrido un error'
          this.$store.commit('toggleLoader')
        }
        
      }
    }
  }

</script>
<style scoped>
  .fondo{   
  background-image: url('../assets/fondo.jpg');
  height: 600px;
  padding: 50px;
 }

.login {
  background-color: white;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 300px !important;
   position: relative;
}
 
</style>



