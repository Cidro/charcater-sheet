<template>
    <div class="home-view">
        <div class="row">
            <div class="col">
                <character-info></character-info>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <character-stats></character-stats>
            </div>
        </div>
    </div>
</template>
<script>
import CharacterInfo from '../components/character/CharacterInfo.vue';
import CharacterStats from '../components/character/CharacterStats.vue';

export default {
    name: "HomeView",
    components: {
        CharacterInfo,
        CharacterStats
    }
}
</script>
<style>
.well {
    background-color: #eee;
    padding: 8px;
    margin: 8px;
}
h6 {
    font-size: 80%;
}
</style>
