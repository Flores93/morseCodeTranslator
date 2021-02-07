import React, { useState } from "react";

import DarkMode from "./components/DarkMode";
import TranslatorInput from "./components/TranslatorInput";

import { morseAlphabet, initState, alphabetMorse } from "./constants/alphabet";

const MorseCode = () => {
  const [messageFromMorse, setMessageFromMorse] = useState(initState);
  const [messageToMorse, setMessageToMorse] = useState("hello world");
  const [fromMorseTrans, setFromMorseTrans] = useState("");
  const [toMorseTrans, setToMorseTrans] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") || false
  );

  const handleInput = ({ target }, fromMorse) => {
    fromMorse
      ? setMessageFromMorse(target.value)
      : setMessageToMorse(target.value);
  };

  const fromMorse = (e) => {
    e.preventDefault();
    let messageConverted = [];

    messageFromMorse.split("   ").map((word) => {
      word
        .split(" ")
        .map((letter) => messageConverted.push(morseAlphabet[letter]));
      messageConverted.push(" ");
      setFromMorseTrans(messageConverted.join(""));
      return "";
    });
  };

  const ToMorse = (e) => {
    e.preventDefault();
    let messageConverted = [];

    messageToMorse
      .toLowerCase()
      .split("")
      .map((letter) => {
        messageConverted.push(alphabetMorse[letter]);
        messageConverted.push("   ");
        setToMorseTrans(messageConverted.join(""));
        return "";
      });
  };

  return (
    <div className={`App ${!darkMode ? "lightmode" : "darkmode"}`}>
      <h3>Morse Code Translator</h3>
      <DarkMode status={!!darkMode} handleMode={setDarkMode} />
      <div>
        <h5>From morse:</h5>

        <TranslatorInput
          value={messageFromMorse}
          onChange={handleInput}
          onClick={fromMorse}
          translation={fromMorseTrans}
        />
      </div>

      <div className="mb5">
        <hr />
        <h5>To morse:</h5>
        <TranslatorInput
          value={messageToMorse}
          onChange={handleInput}
          onClick={ToMorse}
          translation={toMorseTrans}
          fromMorse={false}
        />
      </div>
    </div>
  );
};

export default MorseCode;
