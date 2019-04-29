import React from 'react';

const Messages = (props) => {
    const { messages } = props;
    return (
        <div className="messages">
            <ul>
            {
                messages.map((item, index) => {
                    return (
                        <li key={index}>
                            <span><b>{item.sender}</b> : </span>
                            <span><i>{item.message}</i></span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Messages;