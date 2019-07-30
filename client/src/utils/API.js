import axios from "axios";

export default {
    getMovies: function() {
        return axios.get("/api/movie");
    },
    saveMovie: function(movieData) {
        return axios.post("/api/movie", movieData);
    }
}