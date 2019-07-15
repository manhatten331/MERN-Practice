import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumpbotron";
import { Input, TextArea, FormBtn, Border } from "../components/Form";
import API from "../utils/API";
import { List, ListItem } from "../components/List"

class Books extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
        API.getMovies()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>What is your favorite movie?</h1>
                        </Jumbotron>
                        <Border>
                            <Input name="Title" placeholder="Movie Title (Required)" />
                            <Input name="Genre" placeholder="Movie Genre (Required)" />
                            <TextArea name="Description" placeholder="Discription (Optional)" />
                            <FormBtn>Submit</FormBtn>
                        </Border>
                    </Col>
                    <Col>
                        <Jumbotron>
                            <h1>List of Movies</h1>
                        </Jumbotron>
                        <List>
                            
                        </List>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Books;