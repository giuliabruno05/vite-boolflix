import { reactive } from 'vue';
export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=a3ef670320923c70b5a34c767c0f508c',
    listFilm: [],
    searchText: "",
    apiSearchParameter: "query"
})