<script setup lang="ts">
import ModalLayout from "@/components/ui/modals/base/ModalLayout.vue";

const isOpen = defineModel('isOpen')

const closeModal = () => isOpen.value = false

</script>

<template>
  <Transition>
    <ModalLayout v-model:is-open="isOpen" class="regular-modal" animation-name="regular-modal">
      <template #layout>
        <div class="regular-modal__layout" @click="closeModal"/>
      </template>
      <template #modal>
        <div class="regular-modal__inner">
          <header class="regular-modal__header">
            <slot name="header"/>
            <button class="regular-modal__close" @click="closeModal">
              <span class="visually-hidden">Закрыть окно.</span>
            </button>
          </header>
          <div class="regular-modal__content">
            <slot name="content"/>
          </div>
          <footer class="regular-modal__footer">
            <slot name="footer"/>
          </footer>
        </div>
      </template>
    </ModalLayout>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/regular-modal.scss";
</style>