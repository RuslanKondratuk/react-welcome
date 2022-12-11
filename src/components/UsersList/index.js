import React, {useState} from 'react';
import UserCard from '../UserCard';

const UsersList = (props) => {

    const [filterValue, setfilterValue] = useState('');
    const [isSort, setIsSort] = useState(true);

    const filterList = () => {
        return  props.users.filter(({name: {first, last}}) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });
    };

    const userMap = (usersArray) => usersArray.map((obj) => <UserCard user = {obj} key = {obj.login.uuid} />)

    const changeHandler = ({target: {value}}) => {
        setfilterValue(value)
        filterList();
    }

    const changeSort = () => {
        const {users, setUsers} = props;
        const newUsers = [...users];
        console.log(newUsers)
        newUsers.sort((a,b) => (a.gender > b.gender && isSort) ? 1 : -1);
        setUsers(newUsers);
        setIsSort(!isSort);
    }

    // sortUsers = () => {
    //     const {users} = this.props;
    //     const {isSort} = this.state;
    //     const newUsers = [...users];
    //     newUsers.sort((a,b) => (a.name > b.name && isSort) ? 1 : -1);
    //     this.setState({
    //         users: newUsers,
    //         isSort: !isSort
    //     })
    // }

        return (
            <>
            <input
                type='text'
                value = {filterValue}
                name='filterValue'
                onChange = {changeHandler}
            />
            <button onClick={changeSort}>Sort</button>
            <div className="section-wrapper">
                    {userMap(filterList())}
                </div>
            </>
        );

}

export default UsersList;
