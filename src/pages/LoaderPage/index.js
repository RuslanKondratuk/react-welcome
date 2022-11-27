import React, { Component } from 'react';
import DataProvider from '../../components/DataProvider';

class LoaderPage extends Component {
    render() {
        return (
            <>
            <DataProvider loadData={()=> fetch('./user.json').then(res => res.json())}>
            {(state) => {
                const {data, isFetching, error} = state;
                return (
                <>
                {isFetching && <div>Loading...</div>}
                {error && <div>Error</div>}
                <ul>
                    {data.map((user) => <li key = {user.id}>{user.name}</li>)}
                </ul>
                </>)
                 }}
            </DataProvider>

            <DataProvider loadData={()=> fetch('./phones.json').then(res => res.json())}>
            {(state) => {
                const {data, isFetching, error} = state;
                return (
                <>
                {isFetching && <div>Loading...</div>}
                {error && <div>Error</div>}
                <ol>
                    {data.map((phone) => <li key = {phone.id}>{phone.brand}--- {phone.model} ---- {phone.price}</li>)}
                </ol>
                </>)
                 }}
            </DataProvider>
            </>
        );
    }
}

export default LoaderPage;
