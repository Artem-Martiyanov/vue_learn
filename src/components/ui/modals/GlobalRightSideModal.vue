<script setup lang="ts">
import SideModalTemplate from "@/components/ui/modals/templates/SideModalTemplate.vue";
import Button from "@/components/ui/Button.vue";
import useRegisterGlobalModal from "@/hooks/useRegisterGlobalModal";
import useGlobalModal from "@/hooks/useGlobalModal";

interface Props {
 connectId?: string
}

defineProps<Props>()

const isOpen = useRegisterGlobalModal('rightMenu')
const thisModal = useGlobalModal('rightMenu')

</script>

<template>
  <SideModalTemplate
      class="right-side-menu"
      side="right"
      :connect-id="connectId"
      v-model:is-open="isOpen"
  >
    <template #header>
      <h2 class="right-side-menu__title">Правое меню</h2>
    </template>

    <template #content>
      <div class="right-side-menu__logo">
        <img src="@/assets/images/logo.png" width="200" height="200" alt="">
      </div>
    </template>

    <template #footer>
      <Button @click="thisModal.close" secondary>Закрыть меня</Button>
    </template>
  </SideModalTemplate>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/right-side-menu.scss";
</style>