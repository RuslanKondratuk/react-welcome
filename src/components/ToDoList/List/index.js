import React from 'react';
import styles from './List.module.css'
function List(props) {

    const del = () => {
        props.parentDel(props.id)
    }

    return (
        <li className={styles.container}>{props.text} <button onClick={del}>X</button></li>
    );
    };

export default List;


