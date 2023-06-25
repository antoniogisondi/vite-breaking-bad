<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row d-flex flex-row">
                <div class="col">
                    <button type="button" class="circle water"></button>
                    <button type="button" class="circle-small fire"></button>
                    <button type="button" class="circle-small electric"></button>
                    <button type="button" class="circle-small grass"></button>
                </div>

                <div class="col d-flex align-items-center">
                    <input type="text" class="form-control me-2" placeholder="Search Pokèmon" v-model="store.search_text" @keyup.enter="$emit('select')">
                    <select class="form-select" v-model="store.pokemon_type">
                        <option selected>Select pokemon type</option>
                        <option v-for="(item, index) in store.type_list" :key="index" @click="$emit('select')">{{ item }}</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
   
</template>

<style lang="scss" scoped>
.circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid white;
    margin: 0 10px;
}

.circle-small {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid white;
    margin: 0 10px;
}

.water {
    background: rgb(9, 1, 151);
    background: linear-gradient(332deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 30%, rgba(255, 255, 255, 1) 100%);
}

.fire {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 7%, rgba(246, 3, 3, 1) 64%, rgba(108, 1, 1, 1) 98%);
}

.electric {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(238, 246, 3, 1) 64%, rgba(251, 255, 1, 1) 98%);
}

.grass {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(46, 246, 3, 1) 64%, rgba(8, 101, 0, 1) 94%);
}
</style>