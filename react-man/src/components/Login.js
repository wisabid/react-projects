import React, { Component } from 'react';
import loginWrapper from './../HOC/loginWrapper';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            pass : false,
            loggedin : false
        }
    }
    handleNext = () => {
        this.setState({
            pass : true
        })
    }

    handleCancel =() => {
        this.setState({
            pass : false
        })
    }
    handleLogin = () => {
        this.setState({
            loggedin : true,
            pass : true
        })
    }
    render() {
        debugger;
        if (!this.state.pass) {
            return (
                <>
                    <fieldset className="login">
                        <legend>Username</legend>
                        <input type="text" placeholder="Enter username and press Next"/>
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-link"><Link to="/register">Create Account</Link></span>
                        <span className="action-btn"><button onClick={this.handleNext.bind(this)}>Next</button></span>
                    </div>
                </>
            )
        }
        else if (this.state.loggedin) {
            return (
                <Home loggedin={this.state.loggedin} />
            )
        }
        else {
            return (
                <>
                    <fieldset className="login">
                        <legend>Password</legend>
                        <input type="password" />
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-link"><a href="#" onClick={this.handleCancel.bind(this)}>Cancel</a></span>
                        <span className="action-btn"><button onClick={this.handleLogin.bind(this)}>Next</button></span>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedin : state.loggedin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin : () => dispatch({type : 'login'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);