import React, { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import KeyBoard from "./components/KeyBoard";
=======
import KeyBoard from "./components/KeyBoard"
function App() {
>>>>>>> c02b7b613a0b51d4cb85d3e6f1b7bba54d8124e0

function App() {
  const [text, setText] = useState("trial");
  return (
    <>
      <div id="showText">{text}</div>
      <KeyBoard />
    </>
  );
}

export default App;
