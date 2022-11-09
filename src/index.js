import React from 'react';
import ReactDOM from 'react-dom/client';


const card = <Card />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  card
);




function Card (props) {

    const userObj = {
      "id": 4,
      "name": "Iness",
      "description": "k4jh23k4jh23kjhk2jhk",
      "profilePicture": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    }


    return (
      <section onClick = {() => {console.log('Hello')}}>
          <img src={userObj.profilePicture} alt = '#'/>
          <h2>{userObj.name} {userObj.id}</h2>
          <p>{userObj.description}</p>
      </section>
    )
}