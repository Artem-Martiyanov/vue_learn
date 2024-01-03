import {computed, Ref, ref, watch} from "vue";
import {store} from "@/store/store";

export default (modalName: string): Ref<boolean> => {
    const isOpen = ref(false)

    const modalState = computed(() => {
        if (store.state.modalLayer.globalModalsState) {
            return store.state.modalLayer.globalModalsState[modalName]
        }
    })

    watch(modalState, value => isOpen.value = value || false)
    watch(isOpen, () => !isOpen.value && store.dispatch('closeModal', modalName))
    return isOpen
}