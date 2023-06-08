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
      let myURL = store.apiURL
      if (store.searchText !== "") {
        myURL += `&${store.apiSearchParameter}=${store.searchText}`

      }
      axios.get(myURL)
        .then(result => {
          store.listFilm = result.data.results;
          store.listLanguage = [];
          store.flag = []
          store.listFilm.forEach(element => {
            this.store.listLanguage.push(element.original_language)

          })
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
