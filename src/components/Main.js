import React from 'react';
import Card from "./Card";
import Button from "./Button";

function Main(){
    return(
        <main>
        <Card text="Welcome to PetLand!">
        <em>Find your dream pet</em>
        </Card>
        <Card text="What pets would you like to see?">
         <div>
          <Button icon="😸" text="Cats"/>
          <Button icon="🐕" text="Dogs"/>
          </div>
        </Card>
      </main>
    )
}

export default Main;