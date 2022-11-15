import React, { Component } from 'react';
import List from './List';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({

            isList: true
        })
    }
    renderList = (matter) => {
        return <List mat={matter}/>
    }
    handler = ({target: {value}}) => {
        this.setState({
            matter: value
        })
    }

    render() {
        const value = this.state.value;
        return (
            <>
            <form>
                <input
                    type='text'
                    placeholder = 'Your matter'
                    name = 'matter'
                    onChange = {this.handler}
                />
                <button onClick={this.submitForm}>Add to the list</button>
            </form>
            <div>
                {this.renderList()}
            </div>
            </>
        );
    }
}

export default ToDoList;
