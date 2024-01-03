import {Ref, ref} from "vue";


type handleFn = (cb?: () => any) => void

interface IUseModal {
    isVisible: Ref<boolean>
    open: handleFn
    close: handleFn
}

export default (initState: boolean): IUseModal => {
    const isVisible = ref(initState)

    return {
        isVisible,
        open: (cb) => {
            isVisible.value = true
            typeof cb === 'function' && cb()
        },
        close: (cb) => {
            isVisible.value = false
            typeof cb === 'function' && cb()
        }
    }
}