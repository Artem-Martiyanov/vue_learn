<script setup lang="ts">
import Container from "@/layouts/Container.vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";

const rightMenu = useGlobalModal('rightMenu')

</script>

<template>
  <Container>
    <ul>
      <li>
        <Button @click="rightMenu.open">Открыть правое меню</Button>
      </li>
    </ul>
    <div style="height: 150vh"/>
  </Container>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/home-page.scss";
</style>