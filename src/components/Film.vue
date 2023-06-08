<script>
import { store } from "./../store.js"
export default {
    name: "Film",
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
    <div class="film">
        <h3>{{ details.title }}</h3>
        <h4>{{ details.original_title }}</h4>
        <img v-if="store.iconFlag.includes(details.original_language)" :src="`${details.original_language}.jpg`"
            :alt="`${details.original_language}`">
        <p v-else>{{ details.original_language }}</p>
        <p>{{ details.vote_average }}</p>
        <img src="" alt="">
    </div>
</template>
<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;

img {
    width: 20px;
}
</style>