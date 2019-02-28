import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css'
import EditUserForm from './EditUserForm';
// import Chapter from "../chapters/Chapter";
import AddChapter from "../chapters/AddChapter";



class SingleUser extends Component {
    state = {
        user: {
            username: '',
            password: '',
            // chapter: [{}]
        }
    }

    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
        .then((res) => {
            this.setState({ user: res.data })
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
        .then(() => this.props.history.goBack())
    }

    createNewChapter = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/chapters`).then((res) => {
            this.getSingleUser()
        })
    }

 

    render() {
        return (
            <div className=" App uk-flex-column uk-flex-middle uk-flex-center singleUserBG">
                <h1 className='thisText2'>{this.state.user.author} Chapters</h1>
                <h3 className='thisText2'>{this.state.user.chapter}</h3>
                <h4 className='thisText2'>{this.state.user.text}</h4>
                <EditUserForm
                getSingleUser={this.getSingleUser}
                userId={this.state.user._id}
                />
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                 <div>
                    <button onClick={this.createNewChapter}></button>
                </div>


                <AddChapter userId={this.props.match.params.userId}
                    getSingleUser={this.getSingleUser}
                    />
                

               

                
            </div>
        );
    }
}
export default SingleUser;