import React from 'react';
import styles from './Input.module.css'
import cx from 'classnames';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isInputValid: true,
        }
    }

    changeHandler = ({target: {value, name}}) => {
        if(value.includes(' ')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                isInputValid: true
            })
        }
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendDataToParent(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo, isInputValid} = this.state;
        const clases = cx([styles.input], {
            [styles.valid]: isInputValid,
            [styles.invalid]: !isInputValid,
        })
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
            <input
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                className={clases}
                 />
            <button>Add item</button>
           </form>
        );
    }
}

export default Input;
