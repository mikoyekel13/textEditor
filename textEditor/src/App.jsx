import React, { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard"

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
