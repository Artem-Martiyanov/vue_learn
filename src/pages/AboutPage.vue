<script setup lang="ts">
import Container from "@/layouts/Container.vue";

interface Props {

}

const props = defineProps<Props>()

</script>

<template>
  <Container>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/about-page.scss";
</style>