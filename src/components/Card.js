import React from 'react';

function Card(props){
    const {text, children} = props;
    return(
     <div className="card">
          <h2>{text}</h2>
          {children}
          
        </div>   
    )
}

export default Card;