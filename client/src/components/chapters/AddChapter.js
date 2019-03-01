import React, { Component } from 'react';
import axios from 'axios'

class AddChapterForm extends Component {
    state = {
        chapter: {
            author: '',
            chapter: '',
            text: ''
        }
    }

    handleChange = (event) => {
        const newState = {...this.state.chapter}
        newState[event.target.name] = event.target.value
        this.setState({ chapter: newState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const userId = this.props.userId
        // console.log(this.props.userId)
        console.log(userId)
        const payload = this.state.chapter
        axios.post(`/api/users/${userId}/chapters`, payload)
        .then((res) => {
            console.log(res)
            this.props.getSingleUser()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name="author" placeholder="Your name here" onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="text" onChange={this.handleChange} placeholder="" />
                    </div>
                    <button>Submit Chapter</button>
                </form>
            </div>
        );
    }
}

export default AddChapterForm;