<script setup lang="ts">
import {defineModel} from "vue";

import BaseModalLayout from "@/components/ui/modals/base/BaseModalLayout.vue";
import BaseModalOverlay from "@/components/ui/modals/base/BaseModalOverlay.vue";
import Button from "@/components/ui/Button.vue";
import Icon from "@/components/ui/Icon.vue";


interface Props {
  side: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  side: 'left'
})

const isOpen = defineModel('isOpen')
const sides = {
  'left': 'left-side-modal',
  'right': 'right-side-modal',
}

const closeThisModal = () => isOpen.value = false

</script>

<template>
  <BaseModalLayout
      :class="`side-modal side-modal--${side}`"
      v-model:is-open="isOpen"
      :animation-name="sides[side]"
  >
    <BaseModalOverlay class="side-modal__overlay" @click="closeThisModal"/>
    <div class="side-modal__inner">
      <Button class='side-modal__close' hidden-text="Закрыть." @click="closeThisModal" rounded>
        <Icon name="cross" :width="16" :height="16"/>
      </Button>
      <header class="side-modal__header">
        <slot name="header"/>
      </header>
      <div class="side-modal__content">
        <slot name="content"/>
      </div>
      <footer class="side-modal__footer">
        <slot name="footer"/>
      </footer>
    </div>
  </BaseModalLayout>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/side-modal.scss";
</style>