import React, { Component } from 'react';
import UserCard from '../UserCard';

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSort: true,
            filterValue: '',
        }
    }

    filterList = () => {
        const {filterValue} = this.state;
        return this.props.userList.filter(({name: {first, last}}) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });
    };

    userMap = (usersArray) => usersArray.map((obj) => <UserCard user = {obj} key = {obj.login.uuid} />)

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
        this.filterList();
    }

    render() {
        const{filterValue} = this.state;
        return (
            <>
            <input
                type='text'
                value = {filterValue}
                name='filterValue'
                onChange = {this.changeHandler}
            />
            <div className="section-wrapper">
                    {this.userMap(this.filterList())}
                </div>
            </>
        );
    }
}

export default UsersList;
