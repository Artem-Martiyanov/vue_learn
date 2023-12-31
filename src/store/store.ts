import {InjectionKey} from 'vue'
import {createStore, Store, useStore as baseUseStore} from 'vuex'
import modalLayer, {ModalLayerState} from "@/store/modules/ModalLayer";

export interface RootState {
    modalLayer: ModalLayerState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules: {
        modalLayer,
    }
})

export const useStore = () => baseUseStore(key)

