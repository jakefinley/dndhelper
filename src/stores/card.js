export default {
    namespaced: true,

    state: {
        theme: 'default',

        textColor: {
            rgba: { r: 255, g: 255, b: 255, a: 1 },
        },

        borderColor: {
            rgba: { r: 255, g: 0, b: 0, a: 1 },
        },

        overlayColor: {
            rgba: { r: 0, g: 0, b: 0, a: 0.75 },
        },

        backgroundColor: {
            rgba: { r: 255, g: 255, b: 255, a: 1 },
        },

        rotation: 0
    },

    mutations: {
        setText(state, payload) {
            state.textColor = payload;
        },

        setBorder(state, payload) {
            state.borderColor = payload;
        },

        setOverlay(state, payload) {
            state.overlayColor = payload;
        },

        setBackground(state, payload) {
            state.backgroundColor = payload;
        },

        setRotation(state, payload) {
            state.rotation = payload;
        }
    },

    actions: {
        setText({commit}, payload) {
            commit("setText", payload);
        },

        setBorder({commit}, payload) {
            commit("setBorder", payload);
        },

        setOverlay({commit}, payload) {
            commit("setOverlay", payload);
        },

        setBackground({commit}, payload) {
            commit("setBackground", payload);
        },

        setRotation({commit}, payload) {
            commit("setRotation", payload);
        }
    }
}