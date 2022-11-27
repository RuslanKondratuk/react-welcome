import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
    render() {
        return (
            <div>
                <Child>
                    {({data})=> {
                        return <p>{data.value}</p>
                    }}
                </Child>
            </div>
        );
    }
}

export default Parent;
