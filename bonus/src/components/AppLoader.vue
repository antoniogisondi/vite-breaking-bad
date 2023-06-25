<script>
export default {

}
</script>

<template lang="">
    <div class="page">
        <div class="loader">
            <img src="../assets/pokeball.png" alt="pokeball">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>