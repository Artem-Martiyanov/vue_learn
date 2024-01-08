<script setup lang="ts">
import Header from "@/components/blocks/Header.vue";
import Footer from "@/components/blocks/Footer.vue";
import GlobalModals from "@/layouts/GlobalModals.vue";
</script>

<template>
  <Header/>
  <main class="main">
    <router-view/>
  </main>
  <Footer/>
  <div id="modals"/>
  <GlobalModals/>
</template>

<style lang="scss" scoped>
@import "@/styles/layouts/main-layout.scss";
</style>