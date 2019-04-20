import React from 'react';

const Logout = (props) => {
    return (
        <div className="keep-right">
            <button onClick={props.logout}>Log out</button>
        </div>       
    )
}

export default Logout;