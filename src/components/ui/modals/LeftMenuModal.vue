<script setup lang="ts">
import SideModalTemplate from "@/components/ui/modals/templates/SideModalTemplate.vue";
import {defineModel} from "vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";

const isOpen = defineModel('isOpen')

const rightMenu = useGlobalModal('rightMenu')

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Ссылка 3',
    href: '#'
  },
  {
    name: 'Ссылка 4',
    href: '#'
  },
]



</script>

<template>
  <SideModalTemplate
      class="left-menu-modal"
      side="left"
      v-model:is-open="isOpen"
  >
    <template #header>
      <h2 class="left-menu-modal__title">Главное меню</h2>
    </template>

    <template #content>
      <ul class="left-menu-modal__list">
        <li class="left-menu-modal__item" v-for="link in links" :key="link.name">
          <router-link :to="link.href" class="left-menu-modal__link">{{link.name}}</router-link>
        </li>
      </ul>
      <Button @click="rightMenu.open">Открыть правое меню</Button>
    </template>

  </SideModalTemplate>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/left-menu-modal";
</style>