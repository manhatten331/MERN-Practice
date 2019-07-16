import axios from "axios";

export default {
    getMovies: function() {
        return axios.get("/api/movies");
    },
    saveMovie: function(movieData) {
        return axios.post("/api/movies", movieData);
    }
}