import * as types from './mutation-types.js';

export const setCharacterInfo = ({ commit }, event) => {
    let attribute = event.target.id.replace('character-', '');
    let value = event.target.value;

    commit(types.SET_CHARACTER_INFORMATION, {
        attribute,
        value
    });
};

export const setCharacterStats = ({ commit }, event) => {
    let attribute = event.target.id.replace('character-', '');
    let value = event.target.value;

    commit(types.SET_CHARACTER_STATS, {
        attribute,
        value
    });
};
