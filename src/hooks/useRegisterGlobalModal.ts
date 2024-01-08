import {computed, Ref, ref, watch} from "vue";
import {store} from "@/store/store";

export default (modalName: string): Ref<boolean> => {
    const isOpen = ref(false)

    const modalState = computed(() => store.state.modalLayer.globalModalsState[modalName])

    watch(modalState, value => isOpen.value = value)
    watch(isOpen, () => !isOpen.value && store.dispatch('closeModal', modalName))

    return isOpen
}