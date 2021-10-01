import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojiweknow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInterepter() {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning == undefined) {
      meaning = "We dont have it our database";
    }
    setmeaning(meaning);
  }
  function clickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    console.log(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outtt</h1>
      <input onChange={emojiInterepter}></input>
      <p>{meaning}</p>
      <h3>emoji we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span onClick={() => clickhandler(emoji)} keys={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
