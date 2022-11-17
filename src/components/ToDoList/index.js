import React, { Component } from 'react';
import List from './List';
import Input from './Input';
import styles from './ToDoList.module.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isInputValid: true
        }
    }


    addNewItem = (data) => {
        const {list} = this.state;
        const todoObject = {
            body: data,
            id: list.length
        }
        this.setState({
            list: [...list, todoObject]
        });
    }

    mapList = () => {
        const {list} = this.state;
       return list.map(elem => <List text={elem.body} key={elem.id} id={elem.id} parentDel ={this.delete}/>);
    }

    delete = (id) => {
        const array = this.state.list;
        const changeArray = array.filter(elem => elem.id !== id)
        this.setState ({
            list: changeArray
        })
    }

    render() {

        return (
        <section className={styles['container-start']}>
            <Input sendDataToParent={this.addNewItem}/>
           <ul>
            {this.mapList()}
           </ul>
        </section>
        );
    }
}

export default ToDoList;


