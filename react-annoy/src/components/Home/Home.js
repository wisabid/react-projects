import React, { useContext } from 'react';
import './home.css';
import UserContext from '../../context/UserContext';
import InputElem from '../InputElem';
import MessageBox from '../../containers/MessageBox'

const Home = (props) => {
    const { user } = useContext(UserContext)

    const sendmessage = () => {
        debugger;
    }
    debugger;
    return (
        <section className="annoy-container">
            <header>Hello {user}</header>
            <div>dfgdfgdfg</div>
            <div>
                <ul>
                {
                    props.messages.map((item, index) => {
                        return (
                            <li key={index}>item.message</li>
                        )
                    })
                }
                </ul>
            </div>
            <div>dfgdfgdfg</div>
            <MessageBox />
        </section>
    )
}

export default Home;