<template>
  <v-app>
    <app-navbar v-if="connect"></app-navbar>
    <app-loader></app-loader>
    <v-content >
      <router-view></router-view>
    </v-content>
    <app-footer v-if="connect"></app-footer>
  </v-app>
</template>

<script>
import AppNavbar from './components/layout/Navbar'
import AppFooter from './components/layout/Footer'
import AppLoader from './components/layout/Loader'

import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    AppLoader
  },
  computed: {
    ...mapState(['connect'])
  }
}
</script>

<style >

</style>

