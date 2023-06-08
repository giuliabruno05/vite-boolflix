<script>
import { store } from "./../store.js"

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
}



</script>

<template>
    <header>
        <div>
            <h3>BOOLFLIX</h3>
        </div>
        <div>
            <input type="text" v-model="store.searchText" placeholder="cerca un film" @keyup.enter="$emit('search')">
            <button class="button" @click="$emit('search')">Invia</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;

header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;


    h3 {
        color: $red;
        margin-left: 10px;
    }

    input {
        height: 30px;
        padding: 3px;
    }

    .button {
        height: 30px;
        font-size: 0.8rem;
        padding: 3px;
        margin: 0 10px;
    }
}
</style>
