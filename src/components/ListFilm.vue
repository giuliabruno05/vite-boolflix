<script>
import { store } from './../store.js'
import Film from './Film.vue'
export default {
    name: "ListFilm",
    components: {
        Film,

    },
    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <div class="container">
        <Film v-for="film in store.listFilm" :details="film" :key="film.id" />
    </div>
</template>
<style lang="scss">
@use "./../styles/partials/variables.scss" as *;
</style>
