import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function PasswordGenerator() {
  const [Password, setPassword] = useState("ABCYRUIDJVFDIF");
  const [Length, setLength] = useState(10);
  const [NumberChange, setNumberChange] = useState(false);
  const [CharacterChange, setCharacterChange] = useState(false);

  function generatePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (NumberChange) {
      str += "0123456789";
    }
    if (CharacterChange) {
      str += "+-*/!@#$%^&*(){}><?/";
    }
    let pass = "";

    for (let i = 0; i < Length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [Length, NumberChange, CharacterChange]);
  return (
    <>
      <h1>Password is: {Password}</h1>
      <div className="second">
        <input
          type="range"
          min={5}
          max={50}
          value={Length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        ></input>
        <label>Length is:({Length})</label>
        <input
          type="checkbox"
          defaultChecked={NumberChange}
          onChange={(e) => {
            setNumberChange(!NumberChange);
          }}
        ></input>
        <label>Number</label>
        <input
          type="checkbox"
          defaultChecked={CharacterChange}
          onChange={(e) => {
            setCharacterChange(!CharacterChange);
          }}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
