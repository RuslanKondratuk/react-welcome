import React from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0),
            butName: 'Start'
        }
        this.intervalId = null;
    }


    change = () => {
        if (this.state.butName === 'Start') {
            this.start();
        } else if (this.state.butName === 'Pause') {
            this.stop();
        }
    }

    start = () => {
        this.intervalId = setInterval(() => {
            const {time} = this.state;
            const newdate = addSeconds(time, 1);
            this.setState({
                time: newdate
            })
        }, 1000)
        this.setState({
            butName: 'Pause'
        })
    }

    stop = () => {
        clearInterval(this.intervalId);
        this.setState({
            butName: 'Start'
        })
    }

    clear = () => {
        this.stop()
        const clearData = new Date(0,0,0,0,0,0);
        this.setState({
            time: clearData
        })
    }

    render() {
        const {time, butName} = this.state;
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={this.change}>{butName}</button>
                <button onClick = {this.clear}>Clear</button>
            </div>
        );
    }
}

export default Timer;
