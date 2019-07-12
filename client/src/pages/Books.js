import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid"

class Books extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <Container>
            <Row>
                <Col>
                <h1>Hello World</h1>
                </Col>
                <Col>
                <h1>Hello Manzell</h1>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Books;