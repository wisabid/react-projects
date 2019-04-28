import React, { useState, useReducer, useContext, useRef, useEffect } from 'react';
// import loginWrapper from './../HOC/loginWrapper';
import Home from '../../containers/Home';
// import { Link } from 'react-router-dom';
import './login.css'
import UserContext from '../../context/UserContext'
import InputElem from '../InputElem';

const Login = (props) => {
        const { user, setUser } = useContext(UserContext);
        const username = useRef('');
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
            pass : false,
            loggedin : false,
            loading : false
        });
        console.log('abi', state);
        const { pass, loggedin, loading } = state;

        const handleNext = (nme) => {
            if (nme) {
                dispatch({type: 'loading'})
                setUser(nme);
                localStorage.setItem('annoy_name', nme)
            }
        }
        useEffect(() => {
            if (localStorage.getItem('annoy_name')) {
                handleNext(localStorage.getItem('annoy_name'))
            }
            else {           
                username.current.focus(); 
            }  
        }, [])

        const handleEnter = (e) => {
            if (e.keyCode === 13) {
                handleNext(username.current.value)
            }
        }

        
        if (user) {
            return (
                <Home  />
            )
        }
        else {
            return (
                
                        <>
                            <fieldset className="login">
                                <legend>Name</legend>
                                <input type="text" name="username" autoComplete="off" ref={username} onKeyDown={(e) => handleEnter(e)}/>               
                            </fieldset>
                            
                            <div className="grid-container-2 login-links">
                                <span className="action-btn"><button onClick={() => handleNext(username.current.value)}>Annoy Me</button></span>
                            </div>
                        </>

                
            )
        }
        
    }

export default Login;