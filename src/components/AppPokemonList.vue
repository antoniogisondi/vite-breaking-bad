<script>
import AppLoader from "./AppLoader.vue";
import AppPokemonCard from './AppPokemonCard.vue';
import { store } from '../store'
export default {
    components: {
        AppPokemonCard,
        AppLoader
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container mt-4 bckg-white p-5 rounded-4" v-if="store.loading === false">
        <div class="row bckg-grey py-3 height overflow-auto">
            <div class="col-6 col-md-4 col-lg-3" v-for="(pokemon, index) in store.pokemon_list" :key="pokemon.id">
                <AppPokemonCard :MyPokemon="pokemon"/>
            </div>
        </div>
    </div>
    <AppLoader v-else/>
</template>

<style lang="scss" scoped>
.height {
    height: 530px;
}

.bckg-white {
    background-color: rgba(222, 222, 222, 255);
}

.bckg-grey {
    background-color: rgba(109, 114, 118, 255);
}
</style>