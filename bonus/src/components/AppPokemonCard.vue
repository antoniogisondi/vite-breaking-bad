<script>
export default {
    // utilizzo la props per passare i dati da padre a figlio
    props: {
        MyPokemon: Object
    },
    // utilizzo la computed properties per dare i colori alle card
    computed: {
        colorCard() {
            return this.MyPokemon.color.toLowerCase()
        }
    }
}
</script>

<template>
    <!-- creo la card contenente il pokemon con i vari dati -->
    <div class="card my-3 rounded-4" :style="{ 'background-color': colorCard }">
        <div class="card-content d-flex flex-column align-items-center">
            <img :src="MyPokemon.imageUrl" alt="">
            <div>{{ MyPokemon.number }}</div>
            <h4>{{ MyPokemon.name }}</h4>
            <div>{{ MyPokemon.type1 }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 10px;
}
</style>