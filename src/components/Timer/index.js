import React, {useEffect, useState} from 'react';
import {format, addSeconds} from 'date-fns';

const Timer = () => {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         time: new Date(0,0,0,0,0,0),
    //         isStart: true
    //     }
    //     this.intervalId = null;
    // }

    const [time, setTime] = useState(new Date(0,0,0,0,0,0));
    const [isStart, setIsStart] = useState(false)
    let intervalId = null

    // const clickHandler = () => {
    //     if (isStart) {
    //         start();
    //     } else {
    //         stop();
    //     }
    // }

    // const start = () => {
    //     intervalId = setInterval(() => {
    //         const newdate = addSeconds(time, 1);
    //         console.log(newdate)
    //         setTime (newdate)
    //     }, 1000)
    //     handleStart();
    // }
    useEffect (
        () => {
            if (isStart) {
                intervalId = setTimeout(() => {
                    console.log(time)
                    const newdate = addSeconds(time, 1);
                    console.log(newdate)
                    setTime (newdate)
                }, 1000)
            }
             return () => {
                clearTimeout(intervalId)
             }
        },
    )
    const handleStart = () => {
        setIsStart((isStart) => !isStart)
    }

    // const stop = () => {
    //     clearInterval(intervalId);
    //     handleStart();
    // }

    const clear = () => {
        const clearData = new Date(0,0,0,0,0,0);
        setTime(clearData)
    }

        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={handleStart}>{!isStart ? 'Start' : 'Pause'}</button>
                <button onClick = {clear}>Clear</button>
            </div>
        );
}

export default Timer;



// class Timer extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             time: new Date(0,0,0,0,0,0),
//             isStart: true
//         }
//         this.intervalId = null;
//     }


//     clickHandler = () => {
//         if (this.state.isStart) {
//             this.start();
//         } else {
//             this.stop();
//         }
//     }

//     start = () => {
//         this.intervalId = setInterval(() => {
//             const {time} = this.state;
//             const newdate = addSeconds(time, 1);
//             this.setState({
//                 time: newdate
//             })
//         }, 1000)
//         this.isStart();
//     }

//     isStart = () => {
//         const isStart = this.state.isStart;
//         this.setState({
//             isStart: !isStart,
//         })
//     }

//     stop = () => {
//         clearInterval(this.intervalId);
//         this.isStart();
//     }

//     clear = () => {
//         clearInterval(this.intervalId);
//         this.setState({
//             isStart: true,
//         })
//         const clearData = new Date(0,0,0,0,0,0);
//         this.setState({
//             time: clearData
//         })
//     }

//     render() {
//         const {time, isStart} = this.state;
//         return (
//             <div>
//                 <h1>{format(time, 'HH:mm:ss')}</h1>
//                 <button onClick={this.clickHandler}>{isStart ? 'Start' : 'Pause'}</button>
//                 <button onClick = {this.clear}>Clear</button>
//             </div>
//         );
//     }
// }

// export default Timer;
