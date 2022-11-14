import React from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0),
            isStart: true
        }
        this.intervalId = null;
    }


    clickHandler = () => {
        if (this.state.isStart) {
            this.start();
        } else {
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
        this.isStart();
    }

    isStart = () => {
        const isStart = this.state.isStart;
        this.setState({
            isStart: !isStart,
        })
    }

    stop = () => {
        clearInterval(this.intervalId);
        this.isStart();
    }

    clear = () => {
        clearInterval(this.intervalId);
        this.setState({
            isStart: true,
        })
        const clearData = new Date(0,0,0,0,0,0);
        this.setState({
            time: clearData
        })
    }

    render() {
        const {time, isStart} = this.state;
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={this.clickHandler}>{isStart ? 'Start' : 'Pause'}</button>
                <button onClick = {this.clear}>Clear</button>
            </div>
        );
    }
}

export default Timer;
