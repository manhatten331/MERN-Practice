import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumpbotron";
import { Input, TextArea, FormBtn, Border } from "../components/Form"

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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Books;