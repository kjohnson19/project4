import React, { Component } from 'react';
import axios from 'axios'

class EditUserForm extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.user
        const userId = this.props.userId
        console.log(userId)
        axios.patch(`/api/users/${userId}`, payload)
        .then((res) => {
            this.props.getSingleUser()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="Change something?"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

export default EditUserForm;