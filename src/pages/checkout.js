import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyInput from "../components/forms/MyInput";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: ""
        };
    }

        changeHandler = event => {
        this.setState({ firstname: event.target.value });
    };

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
                                <MyInput type="text" name="firstname" label="Imię" className="form-control" value={this.state.firstname} onChange={this.changeHandler} />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput type="text" name="lastname" label="Nazwisko" className="form-control" value={this.state.lastname} />
                            </Col>
                        </Row>
                    </div>
                </form>
                <Row>
                    <Col>
                        <h2>Podane dane:</h2>
                        Imię:
                        {this.state.firstname === "" ? "N/A" : this.state.firstname}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Checkout;
