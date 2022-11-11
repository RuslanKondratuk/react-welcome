import React from "react"
import './style.css';


class UserCard extends React.Component{
    constructor(props) {
        super(props)
    }


    render () {
        const {userName, userDescription, userImg} = this.props
        return (
            <div className="wrapper wrapperOn">
                <img src={userImg} alt = {userName} className = 'img'/>
                <h2>{userName}</h2>
                <p>{userDescription}</p>
            </div>
        )
    }
}


export default UserCard;