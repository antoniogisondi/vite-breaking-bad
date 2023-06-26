import { reactive } from "vue";

export const store = reactive({
    // dichiaro la variabile apiUrl che ha come valore l'API 
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/?per=1050',
    // array vuoto da popolare con la risposta dell'API contenuta in apiUrl
    pokemon_list: [],
    search_text: '',
    loading: true,

    // dichiaro la variabile typeUrl che ha come valore l'API contenente una lista con i tipi dei pokemon
    typeUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    // array vuoto da popolare con la risposta dell'API contenuta in typeUrl
    type_list: [],
    pokemon_type: ''
})