import React, { Component } from 'react';

function Simbling(props) {
    const isOn = props.true ? 'on' : 'of'
    return (
        <h2>
            This is {isOn}
        </h2>
    )
}

export default Simbling;