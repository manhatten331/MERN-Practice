import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumpbotron";

class Books extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <Container>
            <Row>
                <Col>
                <Jumbotron>
                    <h1>What is your favorite movie?</h1>
                </Jumbotron>
                </Col>
                <Col>
                <Jumbotron>
                    <h1>List of Movies</h1>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Books;