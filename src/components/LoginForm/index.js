import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
            <form onChange={this.changeHandlerForm}>
                <input
                    type='text'
                    name = 'email'
                    placeholder = 'Type your email'
                    value={this.state.email}
                    onChange={this.changeHandler}
                />
                <input
                    type='password'
                    name = 'password'
                    placeholder = 'Your password'
                    value={this.state.password}
                    onChange={this.changeHandler}
                />
                <button>Click</button>
            </form>
        );
    }
}

export default LoginForm;
