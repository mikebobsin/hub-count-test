import { createStore } from "vuex";
// import axios from "axios";

export default createStore({
    // TODO: install axios and get values from API
    state: {
        shippingData: [],
        // zipCodeData: [],
    },
    mutations: {
        SET_SHIPPING(state, shipping) {
            state.shippingData.push(shipping);
        },
        // SET_ZIP_CODE_DATA(state, data) {
        //     state.zipCodeData = data;
        // },
    },
    actions: {
        postShipping(context, payload) {
            context.commit("SET_SHIPPING", payload);
        },
        // async getZipCode(context, payload) {
        //     // console.log(payload);
        //     let arr = [];
        //     await payload.map((z, i) => {
        //         axios
        //             .get(`http://viacep.com.br/ws/${z.zipCode}/json/`)
        //             .then((response) => {
        //                 arr.push(response.data);
        //             });
        //     });
        //     context.commit("SET_ZIP_CODE_DATA", arr);
        // },
    },
    getters: {
        getShippingData: (state) => state.shippingData,
        // getData: (state) => state.zipCodeData,
    },
    // modules: {},
});
