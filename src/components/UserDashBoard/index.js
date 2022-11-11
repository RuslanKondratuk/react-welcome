import React from "react";
import {userData} from "./userData";
import UserCard from "../UserCard";
import '../UserCard/style.css';

class UserDashboard extends React.Component {

    userMap = () => userData.map((obj) => <UserCard userName = {obj.name} userDescription = {obj.description} userImg = {obj.profilePicture} key = {obj.id} />)

    render() {
        return (
            <section className="section-wrapper">
            {this.userMap()}
            </section>
        )

    }
}

export default UserDashboard;
