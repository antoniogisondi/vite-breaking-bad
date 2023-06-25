<script>
// importo le varie componenti e librerie
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppPokemonList from './components/AppPokemonList.vue';
import { store } from './store.js';
export default {
  // rendo utilizzabili le componenti importate
  components: {
    AppHeader,
    AppPokemonList,
  },
  data() {
    return {
      // rendo utilizzabile lo store
      store,
    }
  },
  mounted() {
    // effettuo la chiamata ad axios per popolare l'array contenente solo i tipi dei pokemon
    axios.get(store.typeUrl).then((response) => {
      store.type_list = response.data
    })

    this.getPokemonType()
  },
  methods: {
    getPokemonType() {

      let myUrl = store.apiUrl

      if (store.pokemon_type !== '') {
        myUrl += `?eq[type1]=${store.pokemon_type}`
      }

      if (store.pokemon_type !== '') {
        if (store.search_text !== '') {
          myUrl += `&`
        }
        else {
          myUrl += `?`
        }

        myUrl += `?eq[type1]=${store.pokemon_type}`
      }
      // VERIFICO SE FUNZIONA L'EMIT
      console.log('EMIT FUNZIONANTE')

      // effettuo la chiamata ad axios per popolare l'array dei pokemon
      axios.get(myUrl).then((response) => {
        store.pokemon_list = response.data.docs
        store.loading = false
      })
    }
  },
}
</script>

<template>
  <!-- compilo il template -->
  <AppHeader @select="getPokemonType" />
  <AppPokemonList />
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables'
</style>
