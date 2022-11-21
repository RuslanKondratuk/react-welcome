import React from "react";
import Spinner from "../Spiner";
import { getUsers } from "../../api";
import '../UserCard/style.css';
import UsersList from "../UsersList";

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isLoading: true,
            page: 1,
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.page !== this.state.page) {
            this.getData()
        }

    }

    getData = () => {
        const {page} = this.state
       getUsers({page})
        .then(data => {
            this.setState({
                users: data.results,
            })
        })
        .catch((error) => {
            this.setState({
                error,
            })
        })
        .finally(() => {
            this.setState({
                isLoading:false
            })
        })
    }

    next = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    prev = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    render() {
        const {users, error} = this.state
        return (
            <>
            <section>
            <button onClick={this.prev}>Prev page</button>
            <button onClick={this.next}> Next page</button>
                {error && <div>Oops! Error</div>}
                {users && <UsersList userList = {users}/>}
            </section>
            {this.state.isLoading && <Spinner />}
            </>
        )

    }
}

export default UserDashboard;
