<template>
  <v-app>
    <app-navbar v-if="connect"></app-navbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <app-footer v-if="connect"></app-footer>
  </v-app>
</template>

<script>
import AppNavbar from './components/layout/Navbar'
import AppFooter from './components/layout/Footer'

import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  },
  computed: {
    ...mapState(['connect'])
  }
}
</script>
