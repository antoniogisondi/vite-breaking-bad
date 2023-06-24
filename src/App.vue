<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppPokemonList from './components/AppPokemonList.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppPokemonList,
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
  },
}
</script>

<template lang="">
  <div>
    <AppHeader/>  
    <AppPokemonList/>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables'
</style>
