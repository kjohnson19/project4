import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            
            <div>

                    <h1></h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={`/users`} style={{color: 'red'}} activeStyle={{color: 'white'}}><h1>Write and publish your own stories</h1></Link>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<form class="form-inline my-2 my-lg-0">
</form>
</div>

</nav> 
                <img className="homepic" src="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=320"></img>
                <Link to="/chapters">
                <button className ="aqua">Create your book here!</button>
                </Link>
            </div>
        );
    }
}

export default Homepage;