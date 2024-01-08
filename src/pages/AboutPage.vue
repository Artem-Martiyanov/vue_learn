<script setup lang="ts">
import Container from "@/layouts/Container.vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";

const rightMenu = useGlobalModal('rightMenu')

</script>

<template>
  <Container>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <Button @click="rightMenu.open" primary>Открыть правое меню</Button>
  </Container>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/about-page.scss";
</style>