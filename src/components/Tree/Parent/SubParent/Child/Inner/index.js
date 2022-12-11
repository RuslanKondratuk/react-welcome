import React, {useContext} from 'react';
import { UserContext } from '../../../../../../context/UserContext';
// import { withUser } from '../../../../../../HOCs/withUser';

const InnerChild = (props) => {
    const [users, setUsers] = useContext(UserContext);
        return (
        <div style={{border: 'inherit', padding: '20px'}}>
        <p>InnerChild</p>
        <span>{users.firstName}</span>
        <button onClick={setUsers}>Delete User</button>
        </div>
        )

}

// const wrapperMenu = withUser(InnerChild)

export default InnerChild;
