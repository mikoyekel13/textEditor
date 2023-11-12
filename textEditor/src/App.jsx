import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
function App() {
  const [text, setText] = useState("");
  const [textStyle, setTextStyle] = useState({ whiteSpace: "pre-wrap", color: 'black'});
  return (
    <>
      <div id="showText" style={textStyle}>
        {text}
      </div>
      <KeyBoard text={setText} />
      <StyleButton textStyle={setTextStyle} />
    </>
  );
}

export default App;
