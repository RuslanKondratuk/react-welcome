import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const WindowSize = () => {

    const {size} = useWindowSize()
    return (
        <div>
            <p>width: {size.width}px</p>
            <p>height: {size.heigth}px</p>
        </div>
    );

}

export default WindowSize;


// class WindowSize extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             width: window.innerWidth,
//             heigth: window.innerHeight
//         }
//     }

//     resizeHendler = () => {
//         this.setState({
//             width: window.innerWidth,
//             heigth: window.innerHeight
//         })
//     };

//     componentDidMount () {
//         window.addEventListener('resize', this.resizeHendler)
//     }


//     componentWillUnmount () {
//         window.removeEventListener('resize', this.resizeHendler)
//     }



//     render() {
//         return (
//            this.props.children(this.state)
//         );
//     }
// }

// export default WindowSize;
