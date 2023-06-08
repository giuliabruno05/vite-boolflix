<script>
import { store } from "./store.js"
import ListFilm from './components/ListFilm.vue'
import AppSearch from './components/AppSearch.vue'
import axios from 'axios'

export default {
  components: {
    ListFilm,
    AppSearch
  },

  data() {
    return {
      store,
    }
  },
  methods: {
    getFilm() {
      let myURLMovie = store.apiURLMovie
      let myURLSeries = store.apiURLSeries
      store.listFilm = []
      if (store.searchText !== "") {
        myURLMovie += `&${store.apiSearchParameter}=${store.searchText}`
        myURLSeries += `&${store.apiSearchParameter}=${store.searchText}`

      }
      axios.get(myURLMovie)
        .then(result => {
          store.listFilm.push(result.data.results);
        })
      axios.get(myURLSeries)
        .then(result => {
          store.listFilm.push(result.data.results);
          console.log(store.listFilm);
        })
        .catch(err => {
          console.log(err);
        })

    },
  }
}

</script>

<template>
  <AppSearch @search="getFilm" />
  <main>
    <ListFilm />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables.scss" as *;
</style>
