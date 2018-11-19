<template>
  <div class="loader-wrap" v-if="isLoading">
    <v-progress-circular class="loader" :size="80" :width="7" color="blue" indeterminate></v-progress-circular>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>

<style scoped>
  .loader-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 500;
  }
  .loader {
    display: block;
    margin: 0 auto;
    margin-top: 150px;
    z-index: 201;
  }
</style>
