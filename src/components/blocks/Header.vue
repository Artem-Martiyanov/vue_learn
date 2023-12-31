<script setup lang="ts">
import Navigation from "@/components/blocks/Navigation.vue";
import Container from "@/layouts/Container.vue";
</script>

<template>
  <header class="header">
    <Container class="header__container">
      <div class="header__logo">
        <img src="@/assets/logo.png" width="200" height="200" alt="Логотип Vue.">
      </div>
      <Navigation/>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/components/blocks/header.scss";
</style>