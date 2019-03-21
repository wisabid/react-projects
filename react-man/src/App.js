import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
// import { Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/" component={Login} exact strict />
            <Route path="/home" component={Home} exact strict />
            <Route path="/register" component={Register} exact strict/>
            {/* <NavLink to="/home">Home</NavLink> */}
        </div>
      </Router>
    );
  }
}

export default App;
