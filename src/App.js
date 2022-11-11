import React from "react";
// import UserDashboard from './components/UserDashBoard'
// import Tree from "./components/Tree";
import Timer from "./components/Timer";

class App extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        return (
            <Timer />
        )
    }
}

export default App