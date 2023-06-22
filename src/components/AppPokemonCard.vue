<script>
export default {
    props: {
        MyPokemon: Object
    }
}
</script>

<template lang="">
    <div class="card my-3 rounded-4"
    :class="MyPokemon.type1 === 'Grass' ? 'grass' : MyPokemon.type1 === 'Fire' ? 'fire' : MyPokemon.type1 === 'Water' ? 'water' : ''">
        <div class="card-content d-flex flex-column align-items-center">
            <img :src="MyPokemon.imageUrl" alt="">
            <div>{{ MyPokemon.number}}</div>
            <h4>{{MyPokemon.name}}</h4>
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

.grass {
    background-color: rgba(222, 253, 224, 255) !important;
}

.fire {
    background-color: rgba(253, 223, 223, 255) !important;
}

.water {
    background-color: rgba(222, 243, 253, 255) !important;
}
</style>