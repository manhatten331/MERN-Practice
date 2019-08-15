import React, { Component } from "react"
import Jumbotron from "../components/Jumpbotron"
import { Col, Container, Row } from "../components/Grid"
import API from "../utils/API"

class MovieDetails extends Component {
    state = {
        currentMovie: {},
        OMDBresult: {}
    }

    //Component did mount here for the making the call to database 
    //then storing promise into currentMovie state
    //Once stored make another API Call to IMDB with the title from
    //currentMovie object then make the AJAX request to display info
    //from IMDB

    render () {
        //Think about how you want all the information displayed below
        //You have the title, poster, director, genre, released date, etc
        //You might be able to pull in a description as well
        //Look at how the books detail page looks and the omdb cards look
        //organize your thoughts and think about how the layout should
        return 
    }
}

export default MovieDetails;