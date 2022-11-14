import React, { Component } from 'react';
import './style.css'

function Lamp (props) {

    const toogle = () => {
        props.fnHen();
    }

    const cn = props.cn ? 'lamp-on' : 'lamp-off';

    return (
        <>
        <div className={cn}></div>
        <button onClick={toogle}>
            Toogle
        </button>
        </>
    )
}

export default Lamp;
