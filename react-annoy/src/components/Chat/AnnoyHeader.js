import React, { useContext } from 'react';

const AnnoyHeader = (props) => {
    const { user, logout } = props;
    
    return (
        <header>Hello {user} <br/>
                <button onClick={logout}>Logout</button>
            </header>
    )
}

export default AnnoyHeader;