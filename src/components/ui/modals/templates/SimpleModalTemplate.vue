<script setup lang="ts">
import BaseModalLayout from "@/components/ui/modals/base/BaseModalLayout.vue";
import {defineModel} from "vue";
import Button from "@/components/ui/Button.vue";
import BaseModalOverlay from "@/components/ui/modals/base/BaseModalOverlay.vue";

interface Props {
  connectId?: string
}

defineProps<Props>()
const isOpen = defineModel('isOpen')

const closeThisModal = () => isOpen.value = false

</script>

<template>
  <BaseModalLayout
      class="simple-modal"
      v-model:is-open="isOpen"
      :connect-id="connectId"
      animation-name="simple-modal"
  >
    <BaseModalOverlay class="simple-modal__overlay" @click="closeThisModal"/>
    <div class="simple-modal__inner">
      <Button
          class='simple-modal__close'
          :center-icon="{name: 'cross', width: 16, height: 16}"
          hidden-text="Закрыть."
          @click="closeThisModal"
          rounded
      />
      <slot/>
    </div>
  </BaseModalLayout>

</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/simple-modal.scss";
</style>