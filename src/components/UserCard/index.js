import React from "react"
import './style.css';


class UserCard extends React.Component{



    render () {
        const {user: {name: {first, last}, email, picture: {large}}} = this.props;
        return (
            <div className="wrapper wrapperOn">
                <img src={large} alt = {first} className = 'img'/>
                <h2>{first} {last}</h2>
                <p>{email}</p>
            </div>
        )
    }
}


export default UserCard;