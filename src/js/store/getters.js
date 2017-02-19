export const characterInfo = (state) => {
    return state.character.info;
};

export const characterStats = (state) => {
    return state.character.stats;
}

export const characterStatsModifiers = (state) => {
    var modifiers = {};
    for(var stat in state.character.stats) {
        modifiers[stat] = Math.floor((state.character.stats[stat] - 10) / 2);
    }
    return modifiers;
}
