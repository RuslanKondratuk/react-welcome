import React, { Component } from 'react';

class List extends Component {



    render() {
            return (
                <ul>
                    <li><p>{this.props.matter}</p></li>
                </ul>
            );

        }

}

export default List;
