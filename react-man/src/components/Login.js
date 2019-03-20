import React, { Component } from 'react';
import loginWrapper from './../HOC/loginWrapper';
import Home from './Home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actionsLogin';
import InputElem from './InputElem';

class Login extends Component {
    constructor() {
        super();       
    }    
    
    render() {
        if (!this.props.pass) {
            return (
                <>
                    <fieldset className="login">
                   
                        <InputElem elid="username" placeholder="Enter username and press Next" focusme={this.props.focusme.bind(this)} 
                        blurme={this.props.blurme.bind(this)} eltype="text" loading={this.props.loading} focus={this.props.focus} 
                        fieldname="Username"/>                   
                        
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
                        
                        <InputElem elid="password" fieldname="Password" focusme={this.props.focusme.bind(this)} 
                        blurme={this.props.blurme.bind(this)} eltype="password" loading={this.props.loading} focus={this.props.focus}/> 
                        
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