import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyInput from "../components/forms/MyInput";

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <Row>
                            <Col xs={12}>
                                <h1>Witamy przy kasie !</h1>
                                <h2>Podaj dane do wysyłki:</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <MyInput type="text" name="firstname" label="Imię" className="form-control" />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput type="text" name="lastname" label="Nazwisko" className="form-control" />
                            </Col>
                        </Row>
                    </div>
                </form>
            </Container>
        );
    }
}

export default Checkout;
