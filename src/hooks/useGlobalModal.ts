import {store} from "@/store/store";


type handleFn = (cb?: () => any) => void

interface IUseGlobalModal {
    open: handleFn
    close: handleFn
}

export default (modalName: string): IUseGlobalModal => {
    return {

        open: async (cb) => {
            await store.dispatch('openModal', modalName)
            typeof cb === 'function' && cb()
        },
        close: async (cb) => {
            await store.dispatch('closeModal', modalName)
            typeof cb === 'function' && cb()
        }
    }
}