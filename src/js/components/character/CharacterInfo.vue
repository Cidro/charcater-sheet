<template>
    <div class="character-info-component">
        <div class="well">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="character-name">Name</label>
                        <input id="character-name" class="form-control" type="text" placeholder="Name" :value="info.name" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-player">Player</label>
                        <input id="character-player" class="form-control" type="text" placeholder="Player" :value="info.player" @input="updateInfo">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="character-class">Class</label>
                        <input id="character-class" class="form-control" type="text" placeholder="Class" :value="info.class" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-race">Race</label>
                        <input id="character-race" class="form-control" type="text" placeholder="Race" :value="info.race" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-alignment">Alignment</label>
                        <input id="character-alignment" class="form-control" type="text" placeholder="Alignment" :value="info.alignment" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-level">Level</label>
                        <input id="character-level" class="form-control" type="number" placeholder="Level" :value="info.level" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-deity">Deity</label>
                        <input id="character-deity" class="form-control" type="text" placeholder="Deity" :value="info.deity" @input="updateInfo">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="character-size">Size</label>
                        <input id="character-size" class="form-control" type="text" placeholder="Size" :value="info.size" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-age">Age</label>
                        <input id="character-age" class="form-control" type="number" placeholder="Age" :value="info.age" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-gender">Gender</label>
                        <input id="character-gender" class="form-control" type="text" placeholder="Gender" :value="info.gender" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-height">Height</label>
                        <input id="character-height" class="form-control" type="number" placeholder="Height" :value="info.height" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-weight">Weight</label>
                        <input id="character-weight" class="form-control" type="number" placeholder="Weight" :value="info.weight" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-eyes">Eyes</label>
                        <input id="character-eyes" class="form-control" type="text" placeholder="Eyes" :value="info.eyes" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-hair">Hair</label>
                        <input id="character-hair" class="form-control" type="text" placeholder="Hair" :value="info.hair" @input="updateInfo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="character-skin">Skin</label>
                        <input id="character-skin" class="form-control" type="text" placeholder="Skin" :value="info.skin" @input="updateInfo">
                    </div>
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
    name: 'CharacterInfo',
    computed: mapGetters({
        'info': 'characterInfo'
    }),
    methods: mapActions({
        updateInfo: 'setCharacterInfo'
    })
}
</script>
