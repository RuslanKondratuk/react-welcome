import React, { Component } from 'react';
import Lamp from './Lamp';
import Simbling from './Simbling';

class Scene extends Component {
    constructor(props) {
        super (props);
        this.state = {
            isOn: true,
        }
    }

    hendler = () => {
        this.setState({
            isOn: !this.state.isOn
        })
    }
    render() {
        return (
            <>
                <Lamp fnHen = {this.hendler}  cn={this.state.isOn}/>
                <Simbling true = {this.state.isOn} />
            </>

        );
    }
}

export default Scene;
