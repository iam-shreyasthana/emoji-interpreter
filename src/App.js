import React, { useState } from 'react';
import './App.css';


function App() {
  
  let [ userInput, setUserInput ] = useState("");

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className='App'>
      <h1>Inside Out!!</h1>
      <input onChange={ inputChangeHandler } className="input-area"></input>
      <div> Hello { userInput }! </div>
    </div>
  )

}

export default App;
