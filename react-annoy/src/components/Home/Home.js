import React, { useContext } from 'react';
import './home.css';
import UserContext from '../../context/UserContext';
import InputElem from '../InputElem';
import MessageBox from '../../containers/MessageBox';
import Messages from '../Chat/Messages';
import AnnoyHeader from '../Chat/AnnoyHeader';

const Home = (props) => {
    const { messages } = props;
    const { user, setUser } = useContext(UserContext)

    const sendmessage = () => {
        debugger;
    }
    debugger;

    const logout = () => {
        setUser('')
    }
    return (
        <section className="annoy-container">
            <AnnoyHeader logout={logout} user={user}/>
            <div>dfgdfgdfg</div>
            <Messages messages={messages} />
            <div>dfgdfgdfg</div>
            <MessageBox user={user}/>
        </section>
    )
}

export default Home;