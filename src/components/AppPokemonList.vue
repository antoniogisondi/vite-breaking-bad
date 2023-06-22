<script>
import AppPokemonCard from './AppPokemonCard.vue';
import { store } from '../store'
export default {
    components: {
        AppPokemonCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container mt-4 bg-grey p-5 rounded-4">
        <div class="row bg-black py-3 height overflow-auto">
            <div class="col-6 col-md-4 col-lg-3" v-for="(pokemon, index) in store.pokemon_list" :key="pokemon.id">
                <AppPokemonCard :MyPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.height {
    height: 530px;
}

.bg-black {
    background-color: rgba(109, 114, 118, 255);
}

.bg-grey {
    background-color: rgba(222, 222, 222, 255);
}
</style>