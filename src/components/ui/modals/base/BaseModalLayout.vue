<script setup lang="ts">
import {defineModel, watch} from "vue";
import {useStore} from "@/store/store";
import {scroll} from "@/utils/utils";


interface Props {
  animationName?: string
}

defineProps<Props>()

const store = useStore()
const isOpen = defineModel('isOpen')

watch(isOpen, () => {
  store.dispatch(isOpen.value ? 'modalLayerUp' : 'modalLayerDown')
  store.state.modalLayer.layer ? scroll.lock() : scroll.unlock()
})

</script>

<template>
  <Transition :name="animationName">
    <article
        class="modal"
        v-show="isOpen"
    >
      <slot/>
    </article>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/base-modal-layout";
</style>