import Storage from './Storage.js';
import * as types from './mutation-types.js';

let timeouts = [];
let timeoutDelay = 500;

const persist = function(key, state) {
    clearTimeout(timeouts[key]);
    timeouts[key] = setTimeout(() => {
        Storage.set(key, state)
        console.log('storage updated');
    }, timeoutDelay);
};

const mutations = {
    [types.SET_CHARACTER_INFORMATION] (state, { attribute, value }) {
        state.character.info[attribute] = value;
        persist('character', state.character);
    },
    [types.SET_CHARACTER_STATS] (state, { attribute, value }) {
        state.character.stats[attribute] = value;
        persist('character', state.character);
    }
}

export default mutations;
