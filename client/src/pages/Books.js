import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumpbotron";
import { Input, TextArea, FormBtn, Border } from "../components/Form";
import API from "../utils/API";
import { List, ListItem } from "../components/List"
import DeleteBtn from "../components/DeleteBtn"

class Books extends Component {
    state = {
        movies: [],
        title: "",
        genre: "",
        description: ""
    };

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
        API.getMovies()
            .then(res => this.setState({ movies: res.data, title: "", genre: "", description: "" }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.genre) {
            API.saveMovie({
                title: this.state.title,
                genre: this.state.genre,
                // description: this.state.description
            }, () => this.setState({
                title: "",
                genre: "",
                description: ""
            }))
                .then(res => {
                    console.log(res);
                    this.loadMovies()
                })
                .catch(err => console.log(err));
        }
    }

    deleteMovie = id => {
        API.deleteMovie(id)
            .then(res => this.loadMovies())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>What is your favorite movie?</h1>
                        </Jumbotron>
                        <Border>
                            <Input
                            value={this.state.title}
                            onChange={this.handleInputChange} 
                            name="title" 
                            placeholder="Movie Title (Required)" 
                            />
                            <Input
                            value={this.state.genre}
                            onChange={this.handleInputChange} 
                            name="genre" 
                            placeholder="Movie Genre (Required)" 
                            />
                            <TextArea 
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description" 
                            placeholder="Description (Optional)" 
                            />
                            <FormBtn
                            disabled={!(this.state.title && this.state.genre)}
                            onClick={this.handleFormSubmit}
                            >Submit
                            </FormBtn>
                        </Border>
                    </Col>
                    <Col>
                        <Jumbotron>
                            <h1>List of Movies</h1>
                        </Jumbotron>
                        {this.state.movies.length ? (
                            <List>
                                {this.state.movies.map(movie => (
                                    <ListItem key={movie._id}>
                                        <a href={"/movies/" + movie._id}>
                                            <strong>
                                                {movie.title} Genre: {movie.genre}
                                            </strong>
                                        </a>
                                        <DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No results</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Books;