import {Module, StoreOptions} from "vuex";


export type modalNames = 'leftMenu' | 'rightMenu'

export interface ModalLayerState {
    layer: number,
    globalModalsState?: {
        [key: string]: boolean
    }
}

export default <StoreOptions<ModalLayerState>>{
    state: (): ModalLayerState => ({
        layer: 0,
        globalModalsState: {
            rightMenu: false
        },
    }),
    mutations: {
        openModal: (state, payload) => {
            if (state.globalModalsState) {
                state.globalModalsState[payload] = true
            }
        },
        closeModal: (state, payload) => {
            if (state.globalModalsState) {
                state.globalModalsState[payload] = false
            }
        }
    },
    actions: {
        modalLayerUp: ({commit, state}) => state.layer++,
        modalLayerDown: ({commit, state}) => state.layer--,

        openModal: ({commit}, payload) => commit('openModal', payload),
        closeModal: ({commit}, payload) => commit('closeModal', payload),
    },
} as Module<ModalLayerState, any>

