import React from 'react';

function List(props) {

        const list = props.data;
        return (
            <ul>
                {list.map((el) => {
                return <li key={el}>{el}</li>
                }
                )}
            </ul>
        );
    };

export default List;


