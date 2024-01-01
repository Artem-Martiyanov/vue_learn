<script setup lang="ts">
import SideModalTemplate from "@/components/ui/modals/templates/SideModalTemplate.vue";
import {defineModel} from "vue";

interface Props {

}

const links = [
  {
    name: 'Ссылка 1',
    href: '#'
  },
  {
    name: 'Ссылка 2',
    href: '#'
  },
  {
    name: 'Ссылка 3',
    href: '#'
  },
  {
    name: 'Ссылка 4',
    href: '#'
  },
  {
    name: 'Ссылка 5',
    href: '#'
  },
  {
    name: 'Ссылка 6',
    href: '#'
  },
  {
    name: 'Ссылка 7',
    href: '#'
  },

]

defineProps<Props>()

const isOpen = defineModel('isOpen')

// const closeThisModal = () => isOpen.value = false

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
          <a :href="link.href" class="left-menu-modal__link">{{link.name}}</a>
        </li>
      </ul>
    </template>

  </SideModalTemplate>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/left-menu-modal";
</style>