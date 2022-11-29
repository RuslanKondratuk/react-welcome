import React from 'react';
import withUser from '../../../HOCs/withUser';

const UserMenu = (props) => {
    const {user, setUser} = props;
    if (!Object.keys(user).length) {
        return null
    }
    return (
        <div style={{border: '2px solid red'}}>
            <img src={user.avatar} alt={user.firstName} style={{width: '50px', height: '50px', borderRadius: '50px'}}/>
            <span>{user.firstName} {user.lastName}</span>
            <button onClick={setUser}>logOut</button>
        </div>
    )
}

const wrapperMenu = withUser(UserMenu)



export default wrapperMenu;
