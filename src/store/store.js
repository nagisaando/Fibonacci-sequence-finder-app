import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        number: 8,
        result: [],
        userInput: []
    },
    mutations: {
        addResult: (state, {payload}) => {
            state.result.push(payload);
            return state.number = state.result.reduce((a, b) => a + b, 0)
        },
        reset: (state) => {
            state.result = [];
        }
    },
    actions: {
        getUserInput: ({dispatch, commit}, payload) => {
            commit('reset')
            dispatch('findFibNum', payload);
        },
        findFibNum: ({ dispatch, commit}, payload) => {
            if (payload < 2){
                commit('addResult', {payload})
                return payload
            }
            else {
                return dispatch('findFibNum', payload - 1) + dispatch('findFibNum', payload - 2)
            }  
        }
    },
})