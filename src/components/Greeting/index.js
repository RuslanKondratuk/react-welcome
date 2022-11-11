import React from "react";


class Greeting extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    changeGreeting = () => {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render () {
        const {userName} = this.props;
        const {isGreeting} = this.state;
        const greetingText = isGreeting ? 'Hello' : 'Bye bye'
        return (
            <div>
                <h2 onClick={this.changeGreeting}>{greetingText}, {userName}</h2>
            </div>
        )
    }
}

export default Greeting