<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppPokemonList from './components/AppPokemonList.vue';
import AppPokemonSearch from './components/AppPokemonSearch.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppPokemonList,
    AppPokemonSearch
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(store.apiUrl).then((response) => {
      store.pokemon_list = response.data.docs
      store.loading = false
    })

    axios.get(store.typeUrl).then((response) => {
      store.type_list = response.data
    })

    this.getPokemonType
  },
  methods: {
    getPokemonType() {
      // VERIFICO SE FUNZIONA L'EMIT
      console.log('funziona emit')
    }
  },
}
</script>

<template lang="">
  <header>
    <div class="container mt-3">
      <div class="row d-flex flex-row">
        <AppHeader/>  
        <AppPokemonSearch @select="getPokemonType"/>
      </div>
    </div>
  </header>
    <AppPokemonList/>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables'
</style>
