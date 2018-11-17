<template>
  <h1>{{title}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['title'])
  }
}
</script>
