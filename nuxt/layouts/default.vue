<template>
<a-layout :style="{ backgroundColor: '#211c33'}">
  <div class="content-layout">


    <Nuxt />
  </div>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>

<style scoped>
</style>
