<script>
import { store } from "./../store.js"
export default {
    name: "Series",
    props: {
        details: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="details-series">
            <div>
                <img :src="`${store.pathImage}${details.poster_path}`" alt="">
            </div>
            <h3>{{ details.name }}</h3>
            <h4>{{ details.original_name }}</h4>
            <img v-if="store.iconFlag.includes(details.original_language)" :src="`${details.original_language}.jpg`"
                :alt="`${details.original_language}`">
            <p v-else>{{ details.original_language }}</p>
            <p>{{ details.vote_average }}</p>
            <img src="" alt="">
        </div>
    </div>
</template>
<style lang="scss">
@use "./../styles/partials/variables.scss" as *;
</style>
