<script>
import axios from 'axios';
import AppPokemonCard from './AppPokemonCard.vue';
export default {
    components: {
        AppPokemonCard
    },
    data() {
        return {
            pokemon_list: []
        }
    },
    mounted() {
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=15').then((response) => {
            this.pokemon_list = response.data.docs
            console.log(response.data.docs)
        })
    },

}
</script>

<template lang="">
    <div class="container">
        <div class="row card d-flex flex-row mt-3">
            <div class="card col-lg-3 d-flex flex-row justify-content-center" v-for="(pokemon, index) in pokemon_list" :key="pokemon.id">
                <AppPokemonCard :MyPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>