<script setup lang="ts">
import RegularModal from "@/components/ui/modals/base/RegularModal.vue";
import {useStore} from "@/store/store";

interface Props {
  title: string,
}

const props = defineProps<Props>()
const emit = defineEmits(['onSubmit'])
const isOpen = defineModel('isOpen')

const store = useStore()

const submitHandler = () => emit('onSubmit')

</script>

<template>
  <Transition>
    <RegularModal v-model:is-open="isOpen" class="alert-modal">
      <template #header>
        <h3 class="alert-modal__title">{{ props.title }}</h3>
      </template>

      <template #footer>
        <button @click="submitHandler">Ага</button>
      </template>
    </RegularModal>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/alert-modal.scss";
</style>