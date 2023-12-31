<script setup lang="ts">

const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

</script>

<template>
  <nav class="nav">
    <router-link v-for="link in LINKS" :to="link.path">{{link.name}}</router-link>
  </nav>

</template>

<style lang="scss" scoped>
@import "@/styles/components/blocks/navigation.scss";
</style>