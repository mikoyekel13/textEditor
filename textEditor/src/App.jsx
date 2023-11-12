import { useState } from "react";
import classes from"./App.css";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
function App() {
  const [text, setText] = useState("");
  const [textStyle, setTextStyle] = useState({ whiteSpace: "pre-wrap", color: 'black', fontFamily: 'Cantarell', fontSize: '16px' });
  return (
    <>
      <div className='text'id="showText" style={textStyle}>
        {text}
      </div> 
      <KeyBoard text={setText} />
      <StyleButton textStyle={setTextStyle} />
    </>
  );
}

export default App;
