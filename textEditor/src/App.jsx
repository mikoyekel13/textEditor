import React, { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
function App() {
  const [text, setText] = useState("");
  const [textStyle, setTextStyle] = useState({color: 'black'});
  return (
    <>
      <div style={textStyle} id="showText">{text}</div>
      <KeyBoard text={setText} />
      <StyleButton textStyle={setTextStyle} />
    </>
  );
}

export default App;
