import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import UserContext from './context/UserContext'

class App extends Component {
  state = {
    user : '',
  }
  setUser = (user) => {
    this.setState({
      user : user
    }) 
  }
  render() {
    return (
      <UserContext.Provider value={{user : this.state.user, setUser : this.setUser}}>
        <div className="App">      
          <Login />      
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
