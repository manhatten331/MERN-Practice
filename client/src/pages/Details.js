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
    componentDidMount() {
        API.getMovie(this.props.match.params.id)
            .then(res => this.setState({ currentMovie: res.data }))
            .catch(err =>  console.log(err));
        
        const searchedMovie = this.state.currentMovie.title
        console.log(this.state.currentMovie.title)
        
        this.searchMovie(searchedMovie)
        // searchMovie = query => {
        //     API.search(this.state.currentMovie.title)
        //         .then(res => this.setState({ OMDBresult: res.data }))
        //         .catch(err => console.log(err));
        // }
    }
        
        
        searchMovie = query => {
            console.log(this.state.currentMovie.title)
            API.search(query)
                .then(res => this.setState({ OMDBresult: res.data }))
                .catch(err => console.log(err));
        }

    render () {
        //Think about how you want all the information displayed below
        //You have the title, poster, director, genre, released date, etc
        //You might be able to pull in a description as well
        //Look at how the books detail page looks and the omdb cards look
        //organize your thoughts and think about how the layout should
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>
                                {this.state.currentMovie.title} Genre: {this.state.currentMovie.genre}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MovieDetails;