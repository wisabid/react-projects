import React from 'react';

const Users = (props) => {
    const { users } = props;
    return (
        <div>
            <ul>
            {
                users.map((item, index) => {
                    return (
                        <li key={item.id}>
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