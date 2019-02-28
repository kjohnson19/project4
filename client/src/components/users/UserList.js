import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddUserForm from './AddUserForm'
import '../../App.css'

class UserList extends Component {

    state = {
        users: [{}],
        addUserFormVisible: false
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
        .then((res) => {
            this.setState({ users: res.data })
            console.log("res" + res.data)
        })
        
    }

    toggleAddUserForm = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }
    render() {
        return (
            <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-flex-column bookListBG" >
                 <h1 className="bookFont"> YOUR ACCOUNT </h1>
                <button onClick={this.toggleAddUserForm}>Create New User </button>
                {this.state.addUserFormVisible ? <AddUserForm getAllUsers={this.getAllUsers} toggleAddUserForm={this.toggleAddUserForm}/> : null}

                

                {this.state.users.map((user , i) => (
                    <div key={i} className="App">
                        <Link to={`/users/${user._id}`}>
                        <h2 className="thisText2">{user.username}</h2>
                        <h3 className="thisText2">{user.password}</h3>
                        {/* <h4 className="whiteText2">{user.text}</h4> */}
                        </Link>
                    </div>
                ))}
            
            </div>
        );
    }
}

export default UserList;