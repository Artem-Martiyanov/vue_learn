<script setup lang="ts">
import RegularModal from "@/components/ui/modals/base/RegularModal.vue";
import AlertModal from "@/components/ui/modals/AlertModal.vue";
import {ref} from "vue";

interface Props {
  title: string,
  text: string,
  buttonText: string
}

const props = defineProps<Props>()
const emit = defineEmits(['onConfirm'])


const isOpen = defineModel('isOpen')
const isOpenAlertModal = ref(false)

const openAlertModal = () => isOpenAlertModal.value = true
const submitHandler = () => {
  isOpen.value = false
  isOpenAlertModal.value = false
  emit('onConfirm')
}

</script>

<template>
  <RegularModal v-model:is-open="isOpen" class="confirm-modal">
    <template #header>
      <h3 class="confirm-modal__title">{{ props.title }}</h3>
    </template>
    <template #content>
      <p class="confirm-modal__text">{{ props.text }}</p>
    </template>
    <template #footer>
      <button
          @click="openAlertModal"
          class="confirm-modal__button"
      >
        {{ props.buttonText }}
      </button>
    </template>
  </RegularModal>

  <AlertModal
      class="alert-modal"
      title="Предупреждаю!!"
      v-model:is-open="isOpenAlertModal"
      @on-submit="submitHandler"
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/confirm-modal.scss";
</style>