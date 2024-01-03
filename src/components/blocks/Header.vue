<script setup lang="ts">
import Container from "@/layouts/Container.vue";
import Button from "@/components/ui/Button.vue";
import {watch} from "vue";
import LeftMenuModal from "@/components/ui/modals/LeftMenuModal.vue";
import {useRoute} from "vue-router";
import useModal from "@/hooks/useModal";


const route = useRoute()
const leftMenu = useModal()

watch(() => route.path, leftMenu.close)

</script>

<template>
  <header class="header">
    <Container class="header__container">
      <div class="header__logo">
        <img src="../../assets/images/logo.png" width="200" height="200" alt="Логотип Vue.">
      </div>
      <Button class="header__menu" @click="leftMenu.open" primary>
        <span class="header__menu-icon"/>
      </Button>
    </Container>
  </header>

  <LeftMenuModal
      connect-id="sides-id"
      v-model:is-open="leftMenu.isVisible.value"
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/blocks/header.scss";
</style>