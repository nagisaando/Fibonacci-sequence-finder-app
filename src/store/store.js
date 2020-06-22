import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

  

export const store = new Vuex.Store ({
    state: {
        number: ''
    },
    mutations: {
        addResult: (state, {payload}) => {
            state.number += payload;
        },
        reset: (state) => {
            state.number = 0;
        }
    },
    actions: {
        getUserInput: ({dispatch, commit}, payload) => {
            commit('reset')
            dispatch('findFibNum', payload);
        },
        findFibNum: ({ dispatch, commit}, payload) => {
            if (payload < 2){
                return commit('addResult', {payload})
            }
            else {
                return dispatch('findFibNum', payload - 1) + dispatch('findFibNum', payload - 2)
            }  
        }
    },
  
})