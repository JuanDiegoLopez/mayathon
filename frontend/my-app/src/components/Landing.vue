<template>
     <div>
    <v-toolbar  color="grey darken-2" dark fixed>
        <v-layout>
            <v-flex md6 >
      <v-toolbar-title class="font mt-2" >Ants Inversion</v-toolbar-title>
       </v-flex>
         <v-spacer></v-spacer>
       <v-list class="fla">
        <v-list-tile to="/login">
          <v-list-tile-action>
            <v-icon >account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       </v-list>
     </v-layout>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="https://raw.githubusercontent.com/JuanDiegoLopez/juandiegolopez.github.io/master/public/section1.jpg" height="500">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          
            <img src="../assets/aant.png" alt="Vuetify.js" height="150">
            <h1 class="white--text mb-2 display-1 text-xs-center gr font2">Ants Inversion</h1>
            <div class="white--text subheading mb-3 text-xs-center gr">El poder del trabajo en equipo</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline">Tecnologias del desarrollo</h1>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Vue.js</div>
                    </v-card-title>
                    <v-card-text>
                      Es un Framework progresivo, es decir, es un Framework que sirve para consumir interfaz del usuario.
                      Fue creado por Evan You que trabajaba en Google realizando prototipos y en el core del Framework de 
                      Meteor, hasta que pensó en otra forma de hacer una opción más fácil que abarcara las necesidades a 
                      la hora de hacer prototipos. Así surgió Vue en el 2014, desde entonces ha tenido una gran evolución 
                      y sigue creciendo en su versión 2 cada vez más y  más.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">NodeJs</div>
                    </v-card-title>
                    <v-card-text>
                      Node.js es un entorno JavaScript de lado de servidor que utiliza un modelo asíncrono y dirigido por eventos.
                      Node.js es un entorno JavaScript de lado de servidor que utiliza  un modelo asíncrono y dirigido por eventos. Es una Máquina Virtual tremendamente rápida y de gran calidad escrita 
                      por gente como Lars Bak, uno de los mejores ingenieros del mundo especializados en VMs(Virtual Machines). No olvidemos
                       que V8 es actualizado constantemente y es uno de los intérpretes más rápidos que puedan existir en la actualidad para
                        cualquier lenguaje dinámico. 
                      </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">MongoDB</div>
                    </v-card-title>
                    <v-card-text>
                      En un artículo anterior ya hablamos sobre MongoDB. Recordemos. MongoDB es una base de datos orientada a documentos.
                       Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos.
                       Estos documentos son almacenados en BSON, que es una representación binaria de JSON.  MongoDB está escrito en C++, aunque las consultas se hacen pasando objetos JSON como parámetro. 
                       MongoDB viene de serie con una consola desde la que podemos ejecutar los distintos comandos. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="http://cdis.uanl.mx/wp-content/uploads/2016/10/slider-consultoria-negocios.jpg" height="380">
          
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline"> Integrantes de JJD ASOCIADOS</div>
                  
                  <div class="headline"></div>
                </v-card-title>
                <v-card-text>
                  Elkin David Diaz Plata<br>
                  Juan Diego Lopez Triana<br>
                  Joao Antonio Maldonado Ceron 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contactenos </div>
                </v-card-title>

                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>ingdaviid@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>juandlopez@msn.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>joao.maldonado96@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

     <v-footer color="grey darken-3">
    <span class="white--text">JJD Asociados &copy; 2017</span>
  </v-footer>
    </v-content>
     </div>
</template>
<script>
   export default {
    data () {
      return {
        title: 'Your Logo'
      }
    }
  }
 </script>

 <style>
 .grey{
     color:white;
     background:none;
 }
 .font{ 
  
  font-family: 'Lobster', cursive !important;
  font-size: 30px !important;
 }
 .font2{
   font-family: 'Lobster', cursive !important;
  font-size: 50px !important;

 }
 .fla{
   background: none !important;
    font-size: 30px !important;
 }
 
 </style>
 