<script>
import { store } from './../store.js'
import AppFilmSeries from './AppFilmSeries.vue'

export default {
    name: "ListFilm",
    components: {
        AppFilmSeries
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
        <div class="box-card">
            <AppFilmSeries v-for="film in store.listFilm[0]" :details="film" :key="film.id" />
            <AppFilmSeries v-for="series in store.listFilm[1]" :details="series" :key="series.id" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;

.container {
    margin: 0 auto;
    background-color: #434343;
    min-height: 800px;

    .box-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }
}
</style>
