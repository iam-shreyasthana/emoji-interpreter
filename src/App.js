import React, { useState } from 'react';
import './App.css';

//emoji dictionary for meanings......
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" 
};

//converting Object Keys into Array.....
const emojisArray = Object.keys(emojiDictionary);

function App() {
  
  // useState Hooks for setting Emoji Input into View....
  let [ userInputEmoji, setUserInputEmoji ] = useState("");  
  let [ meaningEmoji, setMeaning ] = useState("Meaning will appear here....!");
  
  //function for handling the functionality of the input area and meaning area.....
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

  //function for handling click event of emoji buttons....
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
          <span onClick={() => emojiClickHandler(emoji)} className="emoji-area">
            {" "}
            {emoji}
            {" "}
          </span>
        ))
      }
    </div>
  )

}

export default App;
