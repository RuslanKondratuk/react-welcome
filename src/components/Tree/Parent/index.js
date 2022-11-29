import React from 'react';
import SubParent from './SubParent';

const Parent = () => {
    return (
        <div style={{border: 'inherit', padding: '20px'}}>
        <p>Parent</p>
        <SubParent/>
    </div>
    );
}

export default Parent;
