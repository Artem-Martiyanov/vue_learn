import {Module, StoreOptions} from "vuex";

export interface ModalLayerState {
    layer: number,
    nowOpenedId: string,
    zIndex: number,
    globalModalsState: {
        [key: string]: boolean
    }
}

export default <StoreOptions<ModalLayerState>>{
    state: (): ModalLayerState => ({
        layer: 0,
        globalModalsState: {},
        nowOpenedId: '',
        zIndex: 10
    }),
    mutations: {
        openModal: (state, payload) => {
            state.globalModalsState[payload] = true
        },
        closeModal: (state, payload) => {
            state.globalModalsState[payload] = false
        }
    },
    actions: {
        modalLayerUp: ({commit, state}) => state.layer++,
        modalLayerDown: ({commit, state}) => state.layer--,

        openModal: ({commit}, payload) => commit('openModal', payload),
        closeModal: ({commit}, payload) => commit('closeModal', payload),
    },
} as Module<ModalLayerState, any>

