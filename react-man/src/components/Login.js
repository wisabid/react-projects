import React, { Component } from 'react';
import loginWrapper from './../HOC/loginWrapper';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actionsLogin';

class Login extends Component {
    constructor() {
        super();       
    }    
    
    render() {
        if (!this.props.pass) {
            return (
                <>
                    <fieldset className="login">
                    { this.props.focus === 'username'
                        ? <legend>Username</legend>
                        : null
                    }   
                    { this.props.loading
                        ? <legend>Loading...</legend>
                        : null
                    }                     
                        <input autoComplete="off" id="username" type="text" placeholder={this.props.focus === 'username'?'':'Enter username and press Next'} 
                        onFocus={this.props.focusme.bind(this)} ref={(input) => this.username = input} onBlur={this.props.blurme.bind(this)}/>
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-link"><Link to="/register">Create Account</Link></span>
                        <span className="action-btn"><button onClick={() => this.props.onNext('passwrd')}>Next</button></span>
                    </div>
                </>
            )
        }
        else if (this.props.loggedin) {
            return (
                <Home loggedin={this.props.loggedin} />
            )
        }
        else {
            return (
                <>
                    <fieldset className="login">
                    { this.props.focus === 'passwrd'
                        ? <legend>Password</legend>
                        : null
                    } 
                        <input type="password" id="passwrd" onFocus={this.props.focusme.bind(this)} onBlur={this.props.blurme.bind(this)}/>
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-link"><a href="#" onClick={this.props.cancel}>Cancel</a></span>
                        <span className="action-btn"><button onClick={this.props.onLogin}>Next</button></span>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedin : state.rLogin.loggedin,
        pass : state.rLogin.pass,
        focus : state.rLogin.focus,
        loading : state.rLogin.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onNext : (id) => dispatch(actionCreator.showpass(id)), //this is using redux-thunk
        onNext: (id) => dispatch({type : 'showpass', id : id}),
        cancel : () => dispatch({type : 'cancel'}),
        onLogin : () => dispatch({type : 'login'}),
        focusme : (event) => dispatch({type : 'focus', id : event.target.id}),
        blurme : () => dispatch({type : 'blur'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);