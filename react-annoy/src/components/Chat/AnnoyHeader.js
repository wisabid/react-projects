import React, { useContext } from 'react';


const AnnoyHeader = (props) => {
    const { user, logout } = props;
    
    return (
        <header>            
            <span><b>Hello <i>{user}</i></b> </span>
            <button onClick={logout}>Logout</button>
        </header>
    )
}

export default AnnoyHeader;