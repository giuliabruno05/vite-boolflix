<script>
import { store } from "./../store.js"
export default {
    name: "AppFilmseries",

    props: {
        details: Object,
        details: Object,
    },
    data() {
        return {
            store
        }
    },
    computed: {
        votefilmandseries() {
            return Math.round(this.details.vote_average / 2)

        }
    }
}
</script>
<template>
    <div class="container">
        <!-- SEZIONE FILM -->
        <div class="card">
            <div>
                <img :src="`${store.pathImage}${details.poster_path}`" alt="">
            </div>
            <ul>
                <li>{{ details.title }}</li>
                <li>{{ details.original_title }}</li>
            </ul>
            <img class="flag" v-if="store.iconFlag.includes(details.original_language)"
                :src="`${details.original_language}.jpg`" :alt="`${details.original_language}`">
            <p v-else>{{ details.original_language }}</p>

        </div>
        <!-- SEZIONE SERIE -->
        <div class="card">
            <ul>
                <li>{{ details.name }}</li>
                <li>{{ details.original_name }}</li>
            </ul>
            <span v-for="n in votefilmandseries">
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-for="n in 5 - votefilmandseries">
                <i class="fa-regular fa-star"></i>
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;

.card {
    width: calc(100vw / 3 - 10px);
    padding: 10px;
    margin: 0 auto;

    .flag {
        width: 25px;
    }
}

i {
    color: $icon;
}
</style>