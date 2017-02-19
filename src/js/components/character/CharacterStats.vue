<template>
    <div class="character-stats-component">
        <div class="well text-center">
            <div class="row">
                <div class="col-4">
                    <h6>Ability Name</h6>
                </div>
                <div class="col-4">
                    <h6>Ability Score</h6>
                </div>
                <div class="col-4">
                    <h6>Ability Modifier</h6>
                </div>
            </div>
            <div class="form-group row" v-for="(stat, name) in stats">
                <label :for="getStatId(name)" class="col-4 col-form-label">{{ getStatName(name) }}</label>
                <div class="col-4">
                    <input :id="getStatId(name)" class="form-control" type="number" :placeholder="name" :value="stat" @input="updateStats">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" disabled :value="modifiers[name]">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'CharacterStats',
    computed: mapGetters({
        'stats': 'characterStats',
        'modifiers': 'characterStatsModifiers'
    }),
    methods: {
        getStatId(statName) {
            return 'character-' + statName;
        },
        getStatName(statName) {
            return statName.charAt(0).toUpperCase() + statName.slice(1);
        },
        ...mapActions({
            updateStats: 'setCharacterStats'
        })
    }
}
</script>
<style scoped>
input {
    text-align: center;
}
</style>
