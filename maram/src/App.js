import React from 'react';
import './App.css';
import Profilecomponent from './Profile/Profile component';
import myImg from '../src/wahiid.jpg'
const handelName = (name) => {
  alert(`Hello ${name}`)
}
function App() {
  return (
    <div className="App">
      <Profilecomponent
      fullName="wahid taamallah"
      bio = "je suis un financié mais J'aime le developpement et je cherche ma premiére opportunité de travail pour m'imposer"
      profession = "financier"
      handelName={handelName}
      >
      <img className="img" src={myImg} alt="myPicture" />
      </Profilecomponent>
    </div>
  );
}

export default App;
