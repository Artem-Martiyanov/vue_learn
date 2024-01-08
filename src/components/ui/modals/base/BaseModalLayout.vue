<script setup lang="ts">
import {defineModel, nextTick, ref, watch} from "vue";
import {useStore} from "@/store/store";
import {scroll} from "@/utils/utils";


interface Props {
  animationName?: string,
  connectId?: string
}

const props = defineProps<Props>()

const store = useStore()
const isOpen = defineModel('isOpen')
const currentZIndex = ref(store.state?.modalLayer?.zIndex)

let isOpenedNow = false

watch(isOpen, () => {
  store.dispatch(isOpen.value ? 'modalLayerUp' : 'modalLayerDown')
  store.state.modalLayer.layer ? scroll.lock() : scroll.unlock()

  // Отвечает за режим связанных модальных окон
  if (props.connectId) {
    isOpenedNow = true
    store.state.modalLayer.nowOpenedId = props.connectId
  }
})

watch(() => store.state.modalLayer.layer, () => {
// Отвечает за режим связанных модальных окон
  if (props.connectId) {
    if (!isOpenedNow && store.state.modalLayer.nowOpenedId === props.connectId) {
      isOpen.value = false
    }
    nextTick(() => {
      isOpenedNow = false
      store.state.modalLayer.nowOpenedId = ''
    })
  }

  // Отвечает за расчёт z-index, чтобы новая открытая модалка была всегда поверх
  if (isOpenedNow) {
    currentZIndex.value = store.state.modalLayer.zIndex++
  }

  if (store.state.modalLayer.layer === 0) {
    currentZIndex.value = store.state.modalLayer.zIndex = 10
  }
})

</script>

<template>
  <Transition :name="animationName">
    <article
        class="modal"
        v-show="isOpen"
        :style="`z-index: ${currentZIndex}`"
    >
      <slot/>
    </article>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/base-modal-layout";
</style>