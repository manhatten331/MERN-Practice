import React, { Component } from "react"
import Jumbotron from "../components/Jumpbotron"
import Card from "../components/Card"
import { Col, Container, Row } from "../components/Grid"
import API from "../utils/API"

class MovieDetails extends Component {
       state = {
            currentMovie: '',
            OMDBresult: '',

            // currentMovieTitle: '',
            // genre: '',
            // OMDBresultTitle: ''
        }


    //Component did mount here for the making the call to database 
    //then storing promise into currentMovie state
    //Once stored make another API Call to IMDB with the title from
    //currentMovie object then make the AJAX request to display info
    //from IMDB

    // async componentDidMount() {

    //     const {data: { genre, title}} = await this.movieDB();
    //     const { data: { title: OMDBresultTitle }} = await this.movieBE(title)

    //     this.setState({
    //         currentMovieTitle: title,
    //         genre,
    //         OMDBresultTitle
    //     })
    // }

    // movieDB = () => API.getMovie(this.props.match.params.id)

    // movieBE = (title) => API.search(title)

    componentDidMount() {
        API.getMovie(this.props.match.params.id)
        .then(res => { 
            this.setState({ 
                currentMovie: res.data
            }, () => API.search(this.state.currentMovie.title)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        OMDBresult: res.data
                    })
                }))
        })
        .catch(err => console.log(err));
    }

    // movieDB = () => {
    //     API.getMovie(this.props.match.params.id)
    //     .then(res => { 
    //         this.setState({ 
    //             currentMovie: res.data
    //         }, this.movieDE(this.state.currentMovie.title))
    //     })
    //     .catch(err => console.log(err));
    //     console.log(this.state.currentMovie.title)
    // }

    // movieDE = (title) => {
    //     API.search(title)
    //     .then(res => { 
    //         this.setState({ 
    //             OMDBresult: res.data
    //         })
    //     })
    //     .catch(err => console.log(err));
    // }


    render() {
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
                                {/* {this.state.currentMovie.title} Genre: {this.state.currentMovie.genre} */}
                            <Card 
                            title={this.state.currentMovie.title}
                            src={this.state.OMDBresult.Poster}
                            genre={this.state.OMDBresult.Genre}
                            released={this.state.OMDBresult.Released}
                            director={this.state.OMDBresult.Director}
                            plot={this.state.OMDBresult.Plot}
                            rating={this.state.OMDBresult.imdbRating}
                            />
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MovieDetails;