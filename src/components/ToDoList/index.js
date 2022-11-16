import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            listDone: [],
        }
    }

    handler = (value) => {
        this.setState({
            value: value
        })
    }

    pushDoneList = () => {
        const data = this.state.value;
        const clearData = '';
        const arrayList = this.state.listDone.slice();
        this.setState({
            value: clearData,
            listDone: arrayList.concat([data])
        });
    }


    render() {
        const listData = this.state.listDone;
        return (
            <>
            <Input inputValue={this.state.value} callBackParent={this.handler} pushList={this.pushDoneList} />
            <List data = {listData}/>
            </>
        );
    }
}

export default ToDoList;
