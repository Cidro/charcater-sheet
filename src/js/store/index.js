import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions.js';
import * as getters from './getters.js';
import mutations from './mutations.js';

import Storage from './Storage.js';

Vue.use(Vuex);

let character = Storage.get('character', {info: {}, stats: {}});


export default new Vuex.Store({
    state: {
        character
    },
    mutations,
    actions,
    getters
});
