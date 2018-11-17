<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
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
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Invertir</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/solicitar">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Solicitar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="inversiones">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mis inversiones</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="solicitudes">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mis solicitudes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="perfil">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Perfil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cerrar sesión</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Crowdlending</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/inicio">Inicio</v-btn>
        <v-btn flat to="/solicitar">Solicitar</v-btn>
        <v-btn flat to="/invertir">Invertir</v-btn>
        <v-btn flat to="/solicitudes">Mis solicitudes</v-btn>
        <v-btn flat to="/inversiones">Mis inversiones</v-btn>
        <v-btn flat to="/perfil">Perfil</v-btn>
        <v-btn flat @click="logout()">Cerrar sesion</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$store.commit('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

