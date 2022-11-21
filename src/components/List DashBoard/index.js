import React, { Component } from 'react';
import { getData } from "./api";
import ListCreate from './ListCreate';
import Spinner from '../Spiner';
import './style.css'
class ListDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            error: null,
            isFetching: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
       getData()
        .then(data => {
            this.setState ({
                card: data,
                isFetching:false
            })
        })
        .catch((error) => {
            this.setState({
                error,
            })
        })
    }

    userMap = (cardsArray) => <ListCreate card={cardsArray}/>


    render() {
        return (
            <div >
                {this.state.isFetching && <Spinner/>}
                {this.state.error && <p>Oops! Errror</p>}
                {this.state.card && this.userMap(this.state.card)}
            </div>
        );
    }
}

export default ListDashBoard;
