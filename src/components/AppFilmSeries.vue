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
    <!-- SEZIONE FILM E SERIE-->
    <div class="card">
        <div class="card-image">
            <img v-if="details.poster_path !== null" :src="`${store.pathImage}${details.poster_path}`" alt="">
            <img v-else src="/film-undefind.jpg" alt="">
        </div>
        <div class="card-text">
            <ul>
                <li> TITOLO: {{ details.title }}</li>
                <li> TITOLO ORIGINALE: {{ details.original_title }}</li>
                <li> {{ details.name }}</li>
                <li>{{ details.original_name }}</li>
                <li> OVERVIEW: {{ details.overview }}</li>
            </ul>
            <img class="flag" v-if="store.iconFlag.includes(details.original_language)"
                :src="`${details.original_language}.jpg`" :alt="`${details.original_language}`">
            <p v-else>{{ details.original_language }}</p>
            <!-- SEZIONE ICON STELLE -->
            <div>
                <span v-for="n in votefilmandseries">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="n in 5 - votefilmandseries">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
        </div>


    </div>
</template>
<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;

.card {
    width: calc(100vw / 3 - 10px);
    padding: 20px;
    margin: 30px auto;
    height: 500px;
    transition: 1.5s;

    &:hover {
        transform: rotateY(180deg);
    }

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
        margin: 10px 0;
    }

    .card-image img {
        height: 500px;
    }

    .card-text {
        display: none;
        height: 500px;
        overflow: auto;
        transform: scaleX(-1);


        li {
            margin: 10px 0;
            line-height: 25px;

        }
    }
}

i {
    color: $icon;
}
</style>