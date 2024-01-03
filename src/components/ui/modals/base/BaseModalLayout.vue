<script setup lang="ts">
import {defineModel, nextTick, watch} from "vue";
import {useStore} from "@/store/store";
import {scroll} from "@/utils/utils";


interface Props {
  animationName?: string,
  connectId?: string
}

const props = defineProps<Props>()

const store = useStore()
const isOpen = defineModel('isOpen')

// Открыто ли модальное окно только что
let isOpenedNow = false

watch(isOpen, () => {
  store.dispatch(isOpen.value ? 'modalLayerUp' : 'modalLayerDown')
  store.state.modalLayer.layer ? scroll.lock() : scroll.unlock()

  if (props.connectId) {
    isOpenedNow = true
  }
})

// Отвечает за режим связанных модальных окон
watch(() => store.state.modalLayer.layer, () => {
  if (props.connectId) {
    if (!isOpenedNow) {
      isOpen.value = false
    }
    nextTick(() => isOpenedNow = false)
  }
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