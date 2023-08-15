import React from 'react';

function Button(props){
    return (
        <button>
            <span role="img">{props.icon}</span>
            {props.text}
          </button>
    )
}
export default Button;