import React, { useState, useReducer, useContext, useRef, useEffect } from 'react';
// import loginWrapper from './../HOC/loginWrapper';
import Home from '../../containers/Home';
// import { Link } from 'react-router-dom';
import './login.css'
import UserContext from '../../context/UserContext'
import InputElem from '../InputElem';
import chewing from '../../assets/images/chewing.gif'

const Login = (props) => {
        const { user, setUser } = useContext(UserContext);
        
        const username = useRef('');
        
        const loginreducer = (state, action) => {
            switch (action.type) {
                case 'loading':
                    debugger;
                    return {...state, loading: true, error_msg: '' }
                case 'setUsername':
                    return {...state, user_name : action.username, error_msg: '' }
                case 'error': 
                    return {...state, error_msg: action.error}
                default:
                    return state;
            }
        }
        const [state, dispatch] = useReducer(loginreducer, {
            pass : false,
            loggedin : false,
            loading : false,
            user_name : '',
            error_msg: ''
        });
        console.log('abi', state);
        const { pass, loggedin, loading, user_name, error_msg } = state;
        const { users } = props;

        const handleNext = (nme) => {
            if (nme && nme.length >= 2) {
                debugger;
                let chkname = users.find(item => item.name.toLowerCase() === nme.toLowerCase())   
                if (!chkname)  {         
                    dispatch({type: 'loading'})
                    setUser(nme);
                    localStorage.setItem('annoy_name', nme)
                }
                else {
                    dispatch({type: 'error', error : 'Name Taken !'})        
                }
            }
            else {
                dispatch({type: 'error', error : 'Insufficient Length !'})  
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
        //let { user_name, setUsername} = useState(username);
        const handleNameCheck = (event) => {
            dispatch({type: 'setUsername', username : username.current.value});
            let chkname = users.find(item => item.name.toLowerCase() === username.current.value.toLowerCase())   
            if (chkname)  {         
                dispatch({type: 'error', error : 'Name Taken !'})        
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
                            <span className="annoy-logo"><img src={chewing} /></span>
                            <fieldset className="login">
                                <legend>Name</legend>
                                <input type="text" name="username" autoComplete="off" ref={username} onKeyDown={(e) => handleEnter(e)} 
                                value={user_name} onChange={handleNameCheck}
                                />              
                            </fieldset>
                            <span className="login-error">{error_msg}</span>                            
                            <div className="grid-container-2 login-links">
                                <span className="action-btn"><button onClick={() => handleNext(username.current.value)}>Annoy Me</button></span>
                            </div>
                        </>

                
            )
        }
        
    }

export default Login;