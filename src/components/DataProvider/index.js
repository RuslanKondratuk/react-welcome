import React, { Component, useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import {loadData} from '../../api/user'

const DataProvider = (props) => {
    const {data, isFetching, error} = useData(loadData)
    console.log(data)
    return (
        <>
        {isFetching && <div>Loading...</div>}
        {error && <div>Error</div>}
        <ul>
            {data.map((user) => <li key = {user.id}>{user.name}</li>)}
        </ul>
        </>)
}

export default DataProvider;
