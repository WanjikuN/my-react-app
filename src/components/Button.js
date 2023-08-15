import React from 'react';

function Button(props){
    const {icon,text} = props;
    return (
        <button>
            <span role="img">{icon}</span>
            {text}
          </button>
    )
}
export default Button;