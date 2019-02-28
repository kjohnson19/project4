import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import UserList from './components/users/UserList'
import SingleUser from './components/users/SingleUser'
import Chapter from './components/chapters/Chapter'

class App extends Component {
  state = {
    user: {
      chapters: [{}]
    },
  }
  render() {
    return (
      <div className="homepic" >
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/chapters" component={Chapter}/>
       
          <Route exact path="/users/:userId" component={SingleUser} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
