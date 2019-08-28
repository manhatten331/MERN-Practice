import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
    // Gets all the movies stored in database
    getMovies: function() {
        return axios.get("/api/movie");
    },
    saveMovie: function(movieData) {
        return axios.post("/api/movie", movieData);
    },
    deleteMovie: function(id) {
        return axios.delete("/api/movie/" + id)
    },
    // Gets one movie with specfic ID in database
    getMovie: id => {
        return axios.get("/api/movie/" + id)
    },
    search: query => {
        return axios.get(BASEURL + query + APIKEY);
    }
}