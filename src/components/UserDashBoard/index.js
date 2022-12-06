import React, {useEffect, useState} from 'react';
import Spinner from "../Spiner";
import { getUsers } from "../../api";
import '../UserCard/style.scss';
import UsersList from "../UsersList";

const UserDashboard = () => {
    const [users, setUsers] = useState ([])
    const [error, setError] = useState (null)
    const [isLoading, setIsLoading] = useState (true)
    const [page, setPage] = useState (1)

    useEffect (
        () => {
            getData()
        }, [page]
    )

    const getData = () => {
       getUsers({page})
        .then(data => {
            setUsers(data.results)
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const next = () => {
        setPage((page) => page + 1)
    }

    const prev = () => {
        if (page > 1) {
            setPage((page) => page - 1)
        }
    }

        return (
            <>
            <section>
            <button onClick={prev}>Prev page</button>
            <button onClick={next}> Next page</button>
                {error && <div>Oops! Error</div>}
                {users && <UsersList userList = {users}/>}
            </section>
            {isLoading && <Spinner />}
            </>
        )

}

export default UserDashboard;

// class UserDashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [],
//             error: null,
//             isLoading: true,
//             page: 1,
//         }
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.page !== this.state.page) {
//             this.getData()
//         }

//     }

//     getData = () => {
//         const {page} = this.state
//        getUsers({page})
//         .then(data => {
//             this.setState({
//                 users: data.results,
//             })
//         })
//         .catch((error) => {
//             this.setState({
//                 error,
//             })
//         })
//         .finally(() => {
//             this.setState({
//                 isLoading:false
//             })
//         })
//     }

//     next = () => {
//         this.setState({
//             page: this.state.page + 1
//         })
//     }

//     prev = () => {
//         if (this.state.page > 1) {
//             this.setState({
//                 page: this.state.page - 1
//             })
//         }

//     }

//     render() {
//         const {users, error} = this.state
//         return (
//             <>
//             <section>
//             <button onClick={this.prev}>Prev page</button>
//             <button onClick={this.next}> Next page</button>
//                 {error && <div>Oops! Error</div>}
//                 {users && <UsersList userList = {users}/>}
//             </section>
//             {this.state.isLoading && <Spinner />}
//             </>
//         )

//     }
// }

// export default UserDashboard;
