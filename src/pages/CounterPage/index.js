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
                <Counter step={this.state.inputValue}/>
            </div>
        );
    }
}

export default CounterPage;
