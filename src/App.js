import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [currentData, setcurrentData] = useState("");
  const [meaning, setmeaning] = useState("");
  const emojidict = {
    "ðĪ": "hugging face emoji",
    "ðĪ": "thinking face",
    "ð": "smiling face with smiling eye",
    "ðđ": "cat with tears of joy",
    "ðĨē": "smiling face with tear",
    "ð": "slightly smiling face",
    "ð": "grinning face with smiling eyes",
    "ðļ": "Grinning Cat with Smiling Eyes",
    "ð": "kissing face with closed eye",
    "ðĪŠ": "zany face"
  };
  var emojis = Object.keys(emojidict);

  //console.log(i)
  function emojiClickHandler(currentData) {
    setmeaning(emojidict[currentData]);
  }
  function changeHandler(x) {
    //console.log('change')
    var currentData = x.target.value;
    setcurrentData(currentData);

    if (currentData in emojidict) {
      setmeaning(emojidict[currentData]);
    } else {
      setmeaning("fail to recognise");
    }
  }

  return (
    <div className="App">
      <h1>Emojiexpert</h1>
      <input onChange={changeHandler} value={currentData}></input>
      <h2>{meaning}</h2>
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        ))
      }
    </div>
  );
}
