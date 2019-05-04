import React from 'react';

const Users = (props) => {
    const { users } = props;
    return (
        <div className="users">
            <ul>
            {
                users.map((item, index) => {
                    return (
                        <li key={index}>
                            <span><b>{item.name}</b></span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Users;