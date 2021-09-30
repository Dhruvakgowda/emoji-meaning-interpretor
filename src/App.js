import { useState } from "react";
import "./styles.css";

//var userName=prompt("Enter your name")

const emojiDictionary = {
  "🥰": "Smiling Face with Hearts",
  "🙂": "Smiling face",
  "😠": "Angry face",
  "😭": "Crying face",
  "😘": "Face Blowing a Kiss",
  "🤪": "Zany Face",
  "🤗": "Hugging Face",
  "🤐": "Zipper-Mouth Face",
  "😑": " Expressionless Face",
  "😴": "Sleeping Face"
};

var emojiKnown = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onTypeHandler(event) {
    var userEmoji = event.target.value;

    var meaning = emojiDictionary[userEmoji];

    if (meaning === undefined) {
      meaning = "we dont know yet";
    }
    setMeaning(meaning);
  }

  function onSelectHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "grey" }}>Inside Out!!</h1>
      <input style={{ padding: "1rem" }} onChange={onTypeHandler} />
      <div style={{ fontSize: "1.2rem", padding: "1rem" }}> {meaning} </div>
      <h2>Emojis Available</h2>
      {emojiKnown.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => onSelectHandler(emoji)}
            style={{
              borderRadius: "50px",
              margin: "1rem",
              border: "1px solid grey",
              display: "inline",
              fontSize: "2rem",
              cursor: "pointer",
              padding: " 0.3rem"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
