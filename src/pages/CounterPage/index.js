import React, { Component } from 'react';
import Counter from '../../components/Counter';


class CounterPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: 1
        }
    }

    handlerValue = ({target: {value}}) => {
        this.setState({
            inputValue: Number(value)
        })
    }
    render() {
        return (
            <div>
                <input
                    type='range'
                    min='1'
                    max = '50'
                    name = 'inputValue'
                    value={this.state.inputValue}
                    onChange={this.handlerValue}
                />
                <Counter step = {this.state.inputValue}>
                    {({count, increment, decrement}) => {
                    return (<div>
                                <h1>{count}</h1>
                                <button onClick={increment}>+</button>
                                <button onClick={decrement}>-</button>
                            </div>)
                    }}
                </Counter>
            </div>
        );
    }
}

export default CounterPage;
