import React, { Component } from 'react';
// import './FlexDirection.css'

const FlexContainer = (props) => {


        const {fd, ai, jc, ta, children} = props

        const styles = {
            display:'flex',
            flexDirection: fd,
            justifyContent: jc,
            alignItems: ai,
            textAlign: ta,
        }
        return (
            <div style={styles}>
                {children}
            </div>
        );
    }


export default FlexContainer;
