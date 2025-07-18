import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Container>
                <form>
                    <Row>
                        <Col xs={12}>
                            <h1>Witamy przy kasie !</h1>
                            <h2>Podaj dane do wysyłki:</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Imię:</p>
                            <input type="text" name="firstname" />
                        </Col>
                        <Col xs={12} md={4}>
                            <p>Nazwisko:</p>
                            <input type="text" name="lastname" />
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}

export default Checkout;
