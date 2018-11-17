<template>
  <v-container v-if='user'>
    <h1 class="display-2">Bienvenido, {{user.nombre}}</h1>
    <br>
    <h3 class="headline">¿Qué deseas hacer hoy?</h3>
    <br>
    <v-layout row wrap>
      <v-flex md5 offset-md1 sx12>
        <div class="f1">
        <v-btn flat block class="btn  title ">
         <h2> Solicitar </h2>
        </v-btn>
        </div>
      </v-flex>
      
      <v-flex md5 offset-md1 sx12>
         <div class="f2">
        <v-btn flat block class="btn f2 title ">
          <h2>Invertir</h2>
        </v-btn>
         </div>
      </v-flex>
      
      <v-flex md5 offset-md1 sx12>
        <div class="f3">
        <v-btn flat block class="btn  title ">
         <h2> Mis solicitudes </h2>
        </v-btn>
        </div>
      </v-flex>

      <v-flex md5 offset-md1 sx12>
        <div class="f4">
        <v-btn flat block class="btn title ">
          <h3> Mis inversiones </h3>
        </v-btn>
        </div>
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
div{
}
.f1{
 background-image: url("../assets/solicitud.jpg");
  }
  .f2 {
   background-image: url("../assets/invertir.jpg");
  }
  .f3 {
   background-image: url("../assets/solicitudes.jpg");
  }
  .f4 {
   background-image: url("../assets/inversiones.jpg");
  }
  .btn {
  height: 150px;
   text-transform:capitalize;
   color:#eee
  }
  h2{
    
  position: relative;
  }

  
</style>
