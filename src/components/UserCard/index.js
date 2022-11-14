import React from "react"
import './style.css';


class UserCard extends React.Component{
    constructor(props) {
        super(props)
    }


    render () {
        const {user: {name, description, profilePicture}} = this.props;
        return (
            <div className="wrapper wrapperOn">
                <img src={profilePicture} alt = {name} className = 'img'/>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        )
    }
}


export default UserCard;