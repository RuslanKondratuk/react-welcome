import React from 'react';
import { withUser } from '../../../../../../HOCs/withUser';

const InnerChild = (props) => {
    const {user, setUser} = props;
        return (
        <div style={{border: 'inherit', padding: '20px'}}>
        <p>InnerChild</p>
        <span>{user.firstName}</span>
        <img src={user.avatar} alt={user.firstName}/>
        <button onClick={setUser}>Delete User</button>
        </div>
        )

}

const wrapperMenu = withUser(InnerChild)

export default wrapperMenu;
