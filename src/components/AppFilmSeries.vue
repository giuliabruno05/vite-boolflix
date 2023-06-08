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
    <!-- SEZIONE FILM -->
    <div class="card">
        <div class="card-image">
            <img :src="`${store.pathImage}${details.poster_path}`" alt="">
        </div>
        <div class="card-text">
            <ul>
                <li>{{ details.title }}</li>
                <li>{{ details.original_title }}</li>
                <li>{{ details.name }}</li>
                <li>{{ details.original_name }}</li>
            </ul>
            <img class="flag" v-if="store.iconFlag.includes(details.original_language)"
                :src="`${details.original_language}.jpg`" :alt="`${details.original_language}`">
            <p v-else>{{ details.original_language }}</p>
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
    width: calc(100vw / 5 - 10px);
    padding: 10px;
    margin: 0 auto;

    &:hover .card-image {
        display: none;
    }

    &:hover .card-text {
        display: block;
        background-color: black;
        color: white;
        padding: 10px;
        margin: 5px 0;
    }

    .flag {
        width: 25px;
        display: block;
    }



    .card-text {
        display: none;
    }
}

i {
    color: $icon;
}
</style>