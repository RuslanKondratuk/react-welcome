import React from 'react';
import PropTypes  from "prop-types";
import './style.scss';


const UserCard = (props) => {
        const {user: {name: {first, last}, email, picture: {large}}} = props;
        return (
            <div className="wrapper wrapperOn">
                <img src={large} alt = {first} className = 'img'/>
                <h2>{first} {last}</h2>
                <p>{email}</p>
            </div>
        )
}


export default UserCard;

UserCard.defaultProps = {
    user: {
        name: {
            first: 'Anonym',
            last: 'Anon',
        },
        email: '',
        picture: {
            large: '',
        },
    }
}

UserCard.propTypes = {
        user: PropTypes.shape({
            name: PropTypes.shape({
                first: PropTypes.string,
                last: PropTypes.string,
            }).isRequired,
            email: PropTypes.string,
            picture: PropTypes.shape({
                large: PropTypes.string,
            }),
    }).isRequired
}

// UserCard.propTypes = {
//     user:PropTypes.object.isRequired,
//     name: PropTypes.shape({
//                         first: PropTypes.string.isRequired,
//                         last: PropTypes.string.isRequired,
//                     }),
//     picture: PropTypes.object.isRequired,
//     first: PropTypes.string.isRequired,
//     last: PropTypes.string.isRequired,
//     large: PropTypes.string,
//     email: PropTypes.string,
// }

// users: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       age: PropTypes.number
//     })
//   )