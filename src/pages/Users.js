import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],
            total_pages: 0,
            page: 1
        };
    }

    fetchUsers = (id) => {
        fetch(`https://reqres.in/api/users?page=${id}`, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: Array.isArray(result.data) ? result.data : [],
                        total_pages: result.total_pages || 0
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    componentDidMount() {
        this.fetchUsers(this.state.page);
    }

    updatePage = (id) => {
        this.setState({ page: id }, () => this.fetchUsers(id));
    };

    renderPagination = () => {
        let pagination = [];
        for (let i = 1; i <= this.state.total_pages; i++) {
            pagination.push(
                <li
                    key={i}
                    className={i === this.state.page ? "active page-item" : "page-item"}
                >
                    <button
                        className="page-link"
                        onClick={() => this.updatePage(i)}
                        style={{ cursor: "pointer" }}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pagination;
    };

    renderList = () => {
        return this.state.users.map(user => (
            <Col md={4} key={user.id}>
                <div className="card mt-2">
                    <img className="card-img-top" src={user.avatar} alt={user.first_name} />
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name}</h5>
                        <p className="card-text">{user.email}</p>
                    </div>
                </div>
            </Col>
        ));
    };

    render() {
        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <Container>
                    <Row>
                        {this.renderList()}
                    </Row>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">{this.renderPagination()}</ul>
                    </nav>
                </Container>
            );
        }
    }
}

export default Users;
