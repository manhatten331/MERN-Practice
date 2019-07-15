import axios from "axios";

export default {
    getMovies: function() {
        return axios.get("/api/movies");
    }
}