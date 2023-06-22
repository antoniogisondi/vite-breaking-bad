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
    <div class="container">
        <div class="row card d-flex flex-row mt-3">
            <div class="card col-lg-3 d-flex flex-row justify-content-center" v-for="(pokemon, index) in store.pokemon_list" :key="pokemon.id">
                <AppPokemonCard :MyPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>