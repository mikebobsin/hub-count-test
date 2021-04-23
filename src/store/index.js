import { createStore } from "vuex";

export default createStore({
    state: {
        shippingData: [],
    },
    mutations: {
        SET_SHIPPING(state, shipping) {
            state.shippingData.push(shipping);
        },
    },
    actions: {
        postShipping(context, payload) {
            context.commit("SET_SHIPPING", payload);
        },
    },
    getters: {
        getShippingData: (state) => state.shippingData,
    },
    // modules: {},
});
