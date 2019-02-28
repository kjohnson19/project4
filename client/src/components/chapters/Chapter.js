import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Insight = styled.form`
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: white;
    }

    textarea {
        background-color: white;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Chapter extends Component {
    state = {
        user: {
          chapters: [{}]
        },
      }


    handleChange = (event) => {

        const updatedState = { ...this.state.chapter }
        updatedState[event.target.name] = event.target.value
        this.setState({ chapter: updatedState })
    }

    handleSubmit = (event, chapterId) => {
        event.preventDefault()
        const payload = this.state.chapter
        axios.patch(`/api/chapters/${chapterId}`, payload)
            .then(() => this.props.getSingleUser)
    }

    deleteChapter = (event, chapterId) => {
        event.preventDefault()
        console.log(chapterId)
        axios.delete(`/api/chapters/${chapterId}`).then(() => {
            this.props.getSingleUser()
        })
    }

    render() {
        return (
            <FlexContainer>

                {this.state.user.chapters.map((chapter, i) => (
                    <Insight onBlur={(event) => this.handleSubmit(event, chapter._id)} key={i}>
                        
                        <div><input onChange={(event) => this.handleChange(event, chapter._id)} type="text" name="author" value={chapter.author}></input></div>
                        <div><textarea onChange={(event) => this.handleChange(event, chapter._id)} type="text" name="text" value={chapter.text}></textarea></div>
                        <button onClick={(event) => this.deleteChapter(event, chapter._id)}>Submit</button>
                    </Insight>
                ))}
            </FlexContainer>
                );
            }
        }
        
export default Chapter;        