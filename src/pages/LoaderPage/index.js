import React, { Component } from 'react';
import DataProvider from '../../components/DataProvider';
import { loadData } from '../../api/user.js';

class LoaderPage extends Component {
    render() {
        return (
            <DataProvider/>
        );
    }
}

export default LoaderPage;
