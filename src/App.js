import React from "react";
import LoginForm from "./components/LoginForm";
// import UserDashboard from './components/UserDashBoard'
// import Tree from "./components/Tree";
// import Timer from "./components/Timer";
// import Scene from './components/Scene'

class App extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        return (
            <LoginForm />
        )
    }
}

export default App