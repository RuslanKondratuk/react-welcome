import React from 'react';
import InnerChild from './Inner';

const Child = () => {
    return (
        <div style={{border: 'inherit', padding: '20px'}}>
        <p>Child</p>
        <InnerChild/>
    </div>
    );
}

export default Child;
