<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-img :aspect-ratio="16/9" src="https://picsum.photos/510/300?random">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading"><strong>{{user.nombre}}</strong></div>
            <div class="body-1"><strong>{{user.correo}}</strong></div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list dense>
        <v-list-tile to="/inicio">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inicio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/invertir">
          <v-list-tile-action>
            <v-icon>find_in_page</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Invertir</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/solicitar">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Solicitar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="inversiones">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mis inversiones</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="solicitudes">
          <v-list-tile-action>
            <v-icon>work_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mis solicitudes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="perfil">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Perfil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>reply_all</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cerrar sesión</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="title">
          Ants Invesment
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/inicio">Inicio</v-btn>
        <v-btn flat to="/solicitar">Solicitar</v-btn>
        <v-btn flat to="/invertir">Invertir</v-btn>
        <v-btn flat to="/solicitudes">Mis solicitudes</v-btn>
        <v-btn flat to="/inversiones">Mis inversiones</v-btn>
        <v-menu offset-y>
          <v-btn slot="activator" flat>
            <v-icon left>account_circle</v-icon>
              {{user.nombre}}
          </v-btn>
          <v-list>
            <v-list-tile to="/perfil">
              <v-list-tile-title>Perfil</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout()">
              <v-list-tile-title>Cerrar sesión</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed:{
    ...mapState(['user'])
  },
  methods: {
    logout () {
      this.$store.commit('disconnect')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.title{
  font-family: 'Lobster', cursive !important;
  font-size: 30px !important;
  height: 40px;
}

</style>

