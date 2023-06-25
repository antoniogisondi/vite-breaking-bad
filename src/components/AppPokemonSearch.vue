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

<template>
    <div class="col d-flex justify-content-right">
        <select class="form-select">
            <option selected>Select pokemon type</option>
            <option v-for="(item, index) in store.type_list" :key="index" @click="$emit('select')">{{ item }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>