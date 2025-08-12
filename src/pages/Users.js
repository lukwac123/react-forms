import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users/", {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        users: Array.isArray(result.data) ? result.data : []
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, users } = this.state;

        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <Container>
                    <Row>
                        {users.map(user => (
                            <Col md={4} key={user.id}>
                                <div className="card mt-2">
                                    <img className="card-img-top" src={user.avatar} alt="Card img cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.first_name}</h5>
                                        <p className="card-text">{user.email}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            );
        }
    }
}

export default Users;
