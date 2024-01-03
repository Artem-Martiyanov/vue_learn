<script setup lang="ts">
import SideModalTemplate from "@/components/ui/modals/templates/SideModalTemplate.vue";
import {defineModel} from "vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";
import {routes} from "@/router";

interface Props {
  connectId?: string
}

defineProps<Props>()

const isOpen = defineModel('isOpen')

const rightMenu = useGlobalModal('rightMenu')

</script>

<template>
  <SideModalTemplate
      class="left-menu-modal"
      side="left"
      :connect-id="connectId"
      v-model:is-open="isOpen"
  >
    <template #header>
      <h2 class="left-menu-modal__title">Главное меню</h2>
    </template>

    <template #content>
      <ul class="left-menu-modal__list">
        <li class="left-menu-modal__item" v-for="route in routes" :key="route.name">
          <Button class="left-menu-modal__link-button" primary>
            <router-link class="left-menu-modal__link" :to="route.path">{{ route.name }}</router-link>
          </Button>
        </li>
      </ul>
      <Button @click="rightMenu.open" secondary>Открыть правое меню</Button>
    </template>

  </SideModalTemplate>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/left-menu-modal";
</style>