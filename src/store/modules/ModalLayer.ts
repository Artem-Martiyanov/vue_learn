import {Module, StoreOptions} from "vuex";


export interface ModalLayerState {
    layer: number,
}

export default <StoreOptions<ModalLayerState>> {
    state: (): ModalLayerState => ({
        layer: 0,
    }),
    mutations: {},
    actions: {
        modalLayerUp: ({commit, state}) => state.layer++,
        modalLayerDown: ({commit, state}) => state.layer--,
    },
} as Module<ModalLayerState, any>
