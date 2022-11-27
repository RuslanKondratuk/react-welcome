import React from 'react';

class WindowSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            heigth: window.innerHeight
        }
    }

    resizeHendler = () => {
        this.setState({
            width: window.innerWidth,
            heigth: window.innerHeight
        })
    };

    componentDidMount () {
        window.addEventListener('resize', this.resizeHendler)
    }


    componentWillUnmount () {
        window.removeEventListener('resize', this.resizeHendler)
    }



    render() {
        return (
           this.props.children(this.state)
        );
    }
}

export default WindowSize;
