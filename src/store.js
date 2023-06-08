import { reactive } from 'vue';
export const store = reactive({
    apiURLMovie: 'https://api.themoviedb.org/3/search/movie?api_key=a3ef670320923c70b5a34c767c0f508c',
    apiURLSeries: 'https://api.themoviedb.org/3/search/tv?api_key=a3ef670320923c70b5a34c767c0f508c',
    listFilm: [],
    searchText: "",
    apiSearchParameter: "query",
    listLanguage: [],
    iconFlag: ["en", "es", "fr", "it", "de"],
    pathImage: "https://image.tmdb.org/t/p/w342"
})