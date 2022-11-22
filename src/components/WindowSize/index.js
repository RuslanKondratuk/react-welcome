import React, { Component } from 'react';

class WindowSize extends Component {
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
        const {width, heigth} = this.state
        return (
            <div>
                <p>
                    Current width: {width} px
                    Current heigth: {heigth} px
                </p>
            </div>
        );
    }
}

export default WindowSize;
