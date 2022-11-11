import React from "react";
import {userData} from "./components/UserCard/userData";
import UserCard from "./components/UserCard";
import './components/UserCard/style.css';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    userMap = () => userData.map((obj) => <UserCard userName = {obj.name} userDescription = {obj.description} userImg = {obj.profilePicture} key = {obj.id} />)


    render () {
        return (
            <section className="section-wrapper">
                {this.userMap()}
            </section>
        )
    }
}

export default App