import React from 'react';

function Input (props) {

    const toogle = (event) => {
        const value1 = event.target.value;
        props.callBackParent(value1)
    }

    const push = (event) => {
        event.preventDefault();
        props.pushList()
    }

    return (
        <form>
            <input
                 type='text'
                 placeholder = 'Your matter'
                 name = 'matter'
                 value={props.inputValue}
                onChange = {toogle}
            />
            <button onClick = {push}>Add to the list</button>
        </form>
    );
}

export default Input;
