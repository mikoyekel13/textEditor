import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
import LangButtons from "./components/langButtons";

function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("eng");
  const [textStyle, setTextStyle] = useState({
    whiteSpace: "pre-wrap",
    color: "black",
    fontFamily: "Cantarell",
  });
  return (
    <>
      <div id="showText" style={textStyle}>
        {text}
      </div>
      <KeyBoard text={setText} lang={lang} />
      <StyleButton textStyle={setTextStyle} />
      <LangButtons lang={setLang} />
    </>
  );
}

export default App;
