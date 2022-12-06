import React, {useState} from 'react';
import UserCard from '../UserCard';

const UsersList = (props) => {

    const [filterValue, setfilterValue] = useState('');

    const filterList = () => {
        return props.userList.filter(({name: {first, last}}) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });
    };

    const userMap = (usersArray) => usersArray.map((obj) => <UserCard user = {obj} key = {obj.login.uuid} />)

    const changeHandler = ({target: {value}}) => {
        setfilterValue(value)
        filterList();
    }

        return (
            <>
            <input
                type='text'
                value = {filterValue}
                name='filterValue'
                onChange = {changeHandler}
            />
            <div className="section-wrapper">
                    {userMap(filterList())}
                </div>
            </>
        );

}

export default UsersList;
