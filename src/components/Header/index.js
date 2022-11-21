import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={styles.header}>
                <img src='https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=2000' className={styles.logo}/>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
