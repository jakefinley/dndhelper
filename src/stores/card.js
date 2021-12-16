export default {
    namespaced: true,

    state: {
        theme: 'default',

        textColor: {
            rgba: { r: 255, g: 255, b: 255, a: 1 },
        },

        borderColor: {
            rgba: { r: 0, g: 0, b: 0, a: 1 },
        },

        overlayColor: {
            rgba: { r: 0, g: 0, b: 0, a: 0.75 },
        },

        backgroundColor: {
            rgba: { r: 255, g: 255, b: 255, a: 1 },
        },

        rotation: 0,

        borderSize: 20,

        visibility: {
            atts: true,
            stats: true,
            saves: true
        }
    },

    mutations: {
        setTheme(state, payload) {
            state.theme = payload;
        },

        setText(state, payload) {
            state.textColor = payload;
        },

        setBorderColor(state, payload) {
            state.borderColor = payload;
        },

        setBorderSize(state, payload) {
            state.borderSize = payload;
        },

        setOverlay(state, payload) {
            state.overlayColor = payload;
        },

        setBackground(state, payload) {
            state.backgroundColor = payload;
        },

        setRotation(state, payload) {
            state.rotation = payload;
        },

        setVisibility(state, payload) {
            state.visibility = payload;
        }
    },

    actions: {
        setTheme({commit}, payload) {
            commit("setTheme", payload);
        },

        setText({commit}, payload) {
            commit("setText", payload);
        },

        setBorderColor({commit}, payload) {
            commit("setBorderColor", payload);
        },

        setBorderSize({commit}, payload) {
            commit("setBorderSize", payload);
        },

        setOverlay({commit}, payload) {
            commit("setOverlay", payload);
        },

        setBackground({commit}, payload) {
            commit("setBackground", payload);
        },

        setRotation({commit}, payload) {
            commit("setRotation", payload);
        },

        setVisibility({commit}, payload) {
            commit("setVisibility", payload);
        }
    }
}