<script setup lang="ts">
import {watch} from "vue";
import {useStore} from "@/store/store";
import {scroll} from "@/utils/utils";


interface Props {
  animationName?: string
}

const props = defineProps<Props>()

const store = useStore()

const isOpen = defineModel('isOpen')

watch(isOpen, () => {
  store.dispatch(isOpen.value ? 'modalLayerUp' : 'modalLayerDown')
  store.state.modalLayer.layer <= 1 ? scroll.unlock() : scroll.lock()
})

</script>

<template>
  <Transition :name="props.animationName">
    <article
        class="modal"
        v-show="isOpen"
    >
      <div class="modal__layout">
        <slot name="layout"/>
      </div>
      <div class="modal__content">
        <slot name="modal"/>
      </div>
    </article>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/modals/modal-layout.scss";
</style>