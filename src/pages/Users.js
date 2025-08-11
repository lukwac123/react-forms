import React, { Component } from "react";

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
                <>
                    {users.map(user => (
                        <div key={user.id}>
                            <p><strong>{user.first_name}</strong></p>
                            <p>{user.email}</p>
                            <img src={user.avatar} alt={user.first_name} />
                        </div>
                    ))}
                </>
            );
        }
    }
}

export default Users;
