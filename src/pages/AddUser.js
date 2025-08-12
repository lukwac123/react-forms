import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Add extends Component {
    constructor (props) {
        super(props);
        this.state = { name: "", movies: "" };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        alert("Wysyłanie formularza: " + JSON.stringify(this.state));
        fetch("https://reqres.in/api/users/", {
            headers: {
                "x-api-key": "reqres-free-v1"
            },
            method: "POST",
            body: JSON.stringify(this.state)
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then (function(response) {
            console.log(response);
        });
        event.preventDefault();
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <label>Imię:</label>
                            <input type="text" value={this.state.name} name="name" className="form-control" onChange={this.handleChange} />
                        </Col>
                        <Col xs={12} md={4}>
                            <label>Filmy:</label>
                            <input type="text" value={this.state.movies} name="movies" className="form-control" onChange={this.handleChange} />
                        </Col>
                        <Col xs={12}>
                            <input type="submit" value="Wyślij" className="btn btn-primary btn-lg gtn-block mt-2" />
                        </Col>
                    </Row>
                </Container>
            </form>
        );
    }
}

export default Add;
