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
  "🤢": "Nauseated Face",
  "🤗": "Hugging Face",
  "🤐": "Zipper-Mouth Face",
  "😑": " Expressionless Face",
  "😴": "Sleeping Face",
  "😉": "Winking Face",
  "🤩": " Star-Struck",
  "🥳": "Partying Face",
  "😟": "Worried Face",
  "😲": "Astonished Face",
  "🤡": "Clown Face",
  "🥱": "Yawning Face",
  "🤤": "Drooling Face",
  "🤥": " Lying Face",
  "🤔": " Thinking Face",
  "🤑": " Money-Mouth Face"
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
      <h1 style={{ color: "#666", fontSize: "40px" }}>Know your Emojis!!</h1>
      <input
        style={{ padding: "1rem", margin: "1rem" }}
        onChange={onTypeHandler}
        maxLength="2"
      />
      <div
        style={{
          fontSize: "1.6rem",
          padding: "1rem",
          border: "1px solid",
          backgroundColor: "white"
        }}
      >
        {" "}
        {meaning}{" "}
      </div>
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
              display: "inline-block",
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
