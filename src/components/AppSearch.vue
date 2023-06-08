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
        height: 25px;
        padding: 3px;
        margin-right: 10px;
    }

}
</style>
