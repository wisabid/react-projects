import React, { useContext, useEffect } from 'react';
import './home.css';
import UserContext from '../../context/UserContext';
import InputElem from '../InputElem';
import MessageBox from '../../containers/MessageBox';
import Messages from '../Chat/Messages';
import Users from '../Chat/Users';
import AnnoyHeader from '../Chat/AnnoyHeader';
import Annoy from '../../containers/Annoy'

const Home = (props) => {
    const { messages, addUser, users, userExit } = props;
    const { user, setUser } = useContext(UserContext)

    const sendmessage = () => {
        debugger;
    }

    useEffect(() => {
        addUser(user);
    }, [])
    debugger;

    const logout = () => {
        userExit(user);
        setUser('')
    }
    return (
        <section className="annoy-container">
            <AnnoyHeader logout={logout} user={user}/>
            <Users users={users}/>
            <Messages messages={messages} />
            <Annoy />
            <MessageBox user={user}/>
        </section>
    )
}

export default Home;