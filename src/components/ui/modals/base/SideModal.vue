<script setup lang="ts">
import ModalLayout from "@/components/ui/modals/base/ModalLayout.vue";

interface Props {

}

const props = defineProps<Props>()

const isOpen = defineModel('isOpen')
const closeModal = () => isOpen.value = false


</script>

<template>
  <ModalLayout
      class="side-modal"
      v-model:is-open="isOpen"
      animation-name="side-modal"
  >
    <template #layout>
      <div class="side-modal__layout" @click="closeModal"/>
    </template>


    <template #modal>
      <div class="side-modal__inner">
        <header class="side-modal__header">
          <button class="side-modal__close" @click="closeModal">
            <span class="visually-hidden">Закрыть окно.</span>
          </button>
        </header>
        asdfsdf
      </div>
    </template>

  </ModalLayout>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/side-modal.scss";
</style>