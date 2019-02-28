import React, { Component } from 'react';
import axios from 'axios'

class AddUserForm extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const newState = {...this.state.user}
        newState[event.target.name] = event.target.value
        this.setState({ user: newState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.user
        axios.post('/api/users/', payload)
        .then((res) => {
            console.log("posted a user")
            this.props.getAllUsers()
            this.props.toggleAddUserForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name="username" placeholder="Your name here" value={this.state.user.username} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="password" value={this.state.user.password} onChange={this.handleChange} placeholder="Password" />
                    </div>
                    
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserForm;