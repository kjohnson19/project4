import React, { Component } from 'react';
import axios from 'axios'

class AddUserForm extends Component {
    state = {
        user: {
            password: '',
            username: ''
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
        axios.post('/api/users', payload)
        .then((res) => {
            this.props.getAllUsers()
    
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <div>
                        <br></br>
                        <input type="text"
                        className="textf"
                        placeholder="name"
                        name="username"
                        value={this.state.user.username}
                        onChange={(event)=>this.handleChange(event)}
                        />
                    </div>
                    <br></br>
                    <div>
                    <input type= "text"
                    className="texte"
                    placeholder="enter password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                   />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserForm;