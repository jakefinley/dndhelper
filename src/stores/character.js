const initial = {
    name: "Example",
    pronouns: "They/Them",
    race: "Human",
    class: "Class(es) and Level(s)",
    hp: 0,
    ac: 0,
    dc: 0,
    pp: 0,

    stats: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    },

    saves: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    }
};

const characterModule = {
    namespaced: true,

    state: initial,

    mutations: {
        setStats (state, payload) {
            state.name = payload.name;
            state.pronouns = payload.pronouns;
            state.race = payload.race;
            state.class = payload.class;
            state.hp = payload.hp;
            state.ac = payload.ac;
            state.dc = payload.dc;
            state.pp = payload.pp;
            state.stats = payload.stats;
            state.saves = payload.saves;
        }
    },

    actions: {
        reset({commit}) {
            commit('setStats', initial);
        },

        set({commit}, payload) {
            commit('setStats', payload);
        }
    }
};

export {characterModule};