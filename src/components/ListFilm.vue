<script>
import { store } from './../store.js'
import Film from './Film.vue'
import Series from './Series.vue'
export default {
    name: "ListFilm",
    components: {
        Film,
        Series
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

        <Film v-for="film in store.listFilm[0]" :details="film" :key="film.id" />
        <Series v-for="series in store.listFilm[1]" :details="series" :key="series.id" />
    </div>
</template>
<style lang="scss">
@use "./../styles/partials/variables.scss" as *;
</style>
