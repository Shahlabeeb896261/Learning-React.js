import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "`~!@#$%^&*()}{][?/\|-";
    }
    for (let i = 1; i <= length; i++) {
      let rand = Math.floor(Math.random() * str.length);
      let char = str.charAt(rand);
      pass += char;
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="heading">
            <h1>Password Generator</h1>
          </div>
          <div className="input-field">
            <input type="text" value={password} readOnly ref={passwordRef} />
            <button onClick={copyToClipboard}>Copy</button>
          </div>
          <div className="function-field">
            <div className="range">
              <input
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                type="range"
                value={length}
                min={8}
                max={100}
                defaultChecked={length}
                name="length"
                id="length"
              />
              <label htmlFor="lenght">Length: {length}</label>
            </div>
            <div className="number">
              <input
                onChange={() => {
                  setNumberAllow((prev) => !prev);
                }}
                type="checkbox"
                checked={numberAllow}
              />
              <label htmlFor="numberAllow">Number</label>
            </div>
            <div className="character">
              <input
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
                type="checkbox"
                checked={charAllow}
              />
              <label htmlFor="charAllow">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
