import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import UserContext from './context/UserContext'

class App extends Component {
  state = {
    firstName : '',
    age : '',
    email : '' 
  }

  handleChange = (e) => {
    this.setState({
      age : e.target.value
    })
  }
  
  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    this.setState({
      firstName : e.target.firstName.value,
      age : e.target.age.value,
      email : e.target.email?e.target.email.value:''
    })
  }
  render() {
    const { firstName, age, email } = this.state;
    return <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name="firstName" type="text" /> <br/>
        <input name="age" type="number" onChange={this.handleChange.bind(this)} value={age}/> <br />
        {(age >= 14)
           ?<input type="email" name="email" />
           : null          
        }
        <br />
        <button type="submit">Submit</button> 
      </form>
    </div>
  }
}

export default App;
