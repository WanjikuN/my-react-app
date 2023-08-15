import React from 'react';
import Button from "./Button";

function Header(){
    return (
       <header>
        <h1>PetLand</h1>
        <nav>
          <Button text="Login"/>
        </nav>
      </header> 
    )
}

export default Header;