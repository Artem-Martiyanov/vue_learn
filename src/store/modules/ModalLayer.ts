import {Module, StoreOptions} from "vuex";


export interface ModalLayerState {
    layer: number,
    closeAllFlag: boolean
}

export default <StoreOptions<ModalLayerState>> {
    state: (): ModalLayerState => ({
        layer: 1,
        closeAllFlag: false
    }),
    mutations: {
        up: (state) => state.layer++,
        down: (state) => state.layer--,
    },
    actions: {
        modalLayerUp: ({commit}) => commit('up'),
        modalLayerDown: ({commit}) => commit('down'),

    },
} as Module<ModalLayerState, any>
