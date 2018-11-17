<template>
  <v-container v-if='user'>
    <h1 class="display-2">Bienvenido, {{user.name}}</h1>
    <br>
    <h3 class="headline">¿Qué deseas hacer hoy?</h3>
    <br>
    <v-layout row wrap>
      <v-flex md5 offset-md1 xs12>
        <v-btn flat block class="btn  title f1">
         <h2> Solicitar </h2>
        </v-btn>
      </v-flex>
      
      <v-flex md5 offset-md1 xs12>
        <v-btn flat block class="btn f2 title">
          <h2>Invertir</h2>
        </v-btn>
      </v-flex>
      
      <v-flex md5 offset-md1 xs12>
        <v-btn flat block class="btn  title f3">
         <h2> Mis solicitudes </h2>
        </v-btn>
      </v-flex>

      <v-flex md5 offset-md1 xs12>
        <v-btn flat block class="btn title f4">
          <h3> Mis inversiones </h3>
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default{
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>
.f1{
 background-image: url("../assets/solicitud.jpg");
 background-size: cover;
  }
  .f2 {
   background-image: url("../assets/invertir.jpg");
   background-size: cover;
  }
  .f3 {
   background-image: url("../assets/solicitudes.jpg");
   background-size: cover;
  }
  .f4 {
   background-image: url("../assets/inversiones.jpg");
   background-size: cover;
  }
  .btn {
    height: 150px;
   text-transform:capitalize;
   color: white;
   border-radius: 5px;
  }

  h2 {
  position: relative;
  }

  
</style>
