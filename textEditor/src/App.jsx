import { useState } from "react";
import classes from"./App.css";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
import LangButtons from "./components/langButtons";

function App() {
  const [text, setText] = useState([]);
  const [lang, setLang] = useState("engLC");
  const [textStyle, setTextStyle] = useState({
    whiteSpace: "pre-wrap",
    color: "black",
    fontFamily: "Cantarell",
    fontSize: '20px'
  });
  return (
    <>
      <div id="showText" style={textStyle}>
        {text.map(function (item, index) {
          return (
            <span style={item.style} key={index}>
              {item.char}
            </span>
          );
        })}
      </div>
      <KeyBoard text={setText} lang={lang} />
      <StyleButton textStyle={setTextStyle} />
      <LangButtons lang={setLang} />
    </>
  );
}

export default App;
