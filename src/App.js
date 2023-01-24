import React, { useState } from 'react';
import './App.css';

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" 
};


const emojisArray = Object.keys(emojiDictionary);

function App() {

  let [ userInputEmoji, setUserInputEmoji ] = useState("");  
  let [ meaningEmoji, setMeaning ] = useState("Meaning will appear here....!");
  
  const emojiInputChangeHandler = (event) => {
    let userInputEmoji = event.target.value;
    setUserInputEmoji(userInputEmoji);

    if(userInputEmoji in emojiDictionary){
      setMeaning(emojiDictionary[userInputEmoji]);
    }
    else{
      setMeaning("We do not have this in our DataBase :(")
    }
  }

  const emojiClickHandler = (userInputEmoji) => {
    setMeaning(emojiDictionary[userInputEmoji]);
  }

  return (
    <div className='App'>
      <h1>Emoji Interpreter</h1>

      <input onChange={ emojiInputChangeHandler } value={userInputEmoji} placeholder="Put an emoji here to show the meaning" 
        className="input-area"></input>
      
      

      <h2> {userInputEmoji} </h2> {}
      <div> <h2>{ meaningEmoji } </h2> </div>{}
      {
        emojisArray.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)} className="emoji-area">
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  )

}

export default App;
