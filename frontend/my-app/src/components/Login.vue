<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md4 offset-md4 class="login">
          <h1 v-show="!signUpShow">Login</h1>
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
            id: response.data.id_usuario,
            name: this.name,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email,
            password: this.password
          }
          this.$store.commit('setUser', user)
          this.$router.push('inicio')
        } catch (error) {
          this.message = 'Ha ocurrido un error'
        }
      },
      async signIn () {
        try {
          const response = await userService.signIn(this.email, this.password)
          if (!response.data.estado) return this.message = response.data.mensaje
          this.$store.commit('setUser', response.data.doc_usu)
          this.$store.commit('setInversiones', response.data.solicitudes)
          this.$router.push('inicio')
        } catch (error) {
          this.message = 'Ha ocurrido un error'
        }
      }
    }
  }

</script>
<style scoped>
.login {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
}
body {
  background-color: #f1f1f1;
}
</style>



