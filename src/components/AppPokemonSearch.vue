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
    <div>
        <select class="form-select w-50">
            <option selected>Select pokemon type</option>
            <option v-for="(item, index) in store.type_list" :key="index">{{ item }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>