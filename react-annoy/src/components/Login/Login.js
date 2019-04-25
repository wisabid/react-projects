import React, { useState, useReducer } from 'react';
// import loginWrapper from './../HOC/loginWrapper';
import Home from '../../containers/Home';
// import { Link } from 'react-router-dom';
import './login.css'
import UserContext from '../../context/UserContext'
import InputElem from '../InputElem';

const Login = (props) => {
        const loginreducer = (state, action) => {
            switch (action.type) {
                case 'loading':
                    debugger;
                    return {...state, loading: true}
                default:
                    return state;
            }
        }
        const [state, dispatch] = useReducer(loginreducer, {
            pass : true,
            loggedin : true,
            focus : '',
            loading : false
        });
        console.log('abi', state);
        const { pass, loggedin, loading } = state;
        if (!pass) {
            return (
                <UserContext.Consumer>
                    {context => (
                        <>
                            <fieldset className="login">
                                <InputElem elid="username" placeholder="Enter username and press Next" focusme={props.focusme.bind(this)} 
                                blurme={props.blurme.bind(this)} eltype="text" loading={loading} focus={props.focus} 
                                fieldname="Username"/>                   
                                
                            </fieldset>
                            
                            <div className="grid-container-2 login-links">
                                {/* <span className="action-link"><Link to="/register">Create Account</Link></span> */}
                                <span className="action-link">Create Account</span>
                                <span className="action-btn"><button onClick={() => {context.setUser('Alfie');dispatch({type: 'loading'});props.onNext('passwrd')}}>Next</button></span>
                            </div>
                        </>
                    )}
                </UserContext.Consumer>
                
            )
        }
        else if (loggedin) {
            return (
                <Home loggedin={props.loggedin} />
            )
        }
        else {
            return (
                <>
                    <fieldset className="login">
                    { props.focus === 'passwrd'
                        ? <legend>Password</legend>
                        : null
                    } 
                        
                        <InputElem elid="password" fieldname="Password" focusme={props.focusme.bind(this)} 
                        blurme={props.blurme.bind(this)} eltype="password" loading={props.loading} focus={props.focus}/> 
                        
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-link"><a href="#" onClick={props.cancel}>Cancel</a></span>
                        <span className="action-btn"><button onClick={props.onLogin}>Next</button></span>
                    </div>
                </>
            )
        }
    }

export default Login;