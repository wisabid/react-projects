import React, { useContext } from 'react';
import './home.css';
import UserContext from '../../context/UserContext';
import InputElem from '../InputElem';

const Home = (props) => {
    const { user } = useContext(UserContext)

    const sendmessage = () => {
        debugger;
    }
    return (
        <section className="annoy-container">
            <header>Hello {user}</header>
            <div>dfgdfgdfg</div>
            <div>dfgdfgdfg</div>
            <div>dfgdfgdfg</div>
            <div className="msg-box">
                <form onSubmit={props.sendmessage}>
                    <fieldset className="login">
                        <InputElem elid="username" placeholder="Enter message and press Enter" focusme={props.focusme} 
                        blurme={props.blurme} eltype="text" loading={props.loading} focus={props.focus} 
                        fieldname="message-input"/>                                       
                    </fieldset>
                    <div className="grid-container-2 login-links">
                        <span className="action-btn"><button onClick={() => {props.sendmessage()}}>Send</button></span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Home;