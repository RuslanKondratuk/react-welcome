import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, title} = props;

    const styles = {
        width: width,
        height: height,
    }
    return (
        <div style={styles}>
            {children}
            <h1>{title}</h1>
        </div>
    )
}

export default ImageWrapper;
