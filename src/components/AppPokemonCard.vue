<script>
export default {
    props: {
        MyPokemon: Object
    }
}
</script>

<template lang="">
    <div class="text-center">
        <img :src="MyPokemon.imageUrl" alt="">
        <div>{{ MyPokemon.number}}</div>
        <h4>{{MyPokemon.name}}</h4>
        <div>{{ MyPokemon.type1 }}</div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100px;
    border-radius: 50%;
}
</style>