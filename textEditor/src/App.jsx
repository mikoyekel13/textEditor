import { useState } from "react";
import KeyBoard from "./components/KeyBoard";
import StyleButton from "./components/StyleButtons";
import LangButtons from "./components/langButtons";

function App() {
  const [text, setText] = useState([]);
  const [lang, setLang] = useState("engLC");
  const [undo,setUndo]=useState([]);
  const [textStyle, setTextStyle] = useState({
    whiteSpace: "pre-wrap",
    color: "black",
    fontFamily: 'sans-serif',
    fontSize: '20px'
  });
  return (
    <>
      <div id="showText" style={{ whiteSpace: "pre-wrap" }}>
        {text.map(function (item, index) {
          return (
            <span style={item.style} key={index}>
              {item.char}
            </span>
          );
        })}
      </div>
      <KeyBoard text={setText} lang={lang} currStyle={textStyle} undo={setUndo} lastText={undo} firstText={text}/>
      <StyleButton
        textStyle={setTextStyle}
        currStyle={textStyle}
        text={setText}
        undo={setUndo}
        firstText={text}
      />
      <LangButtons lang={setLang} />
    </>
  );
}

export default App;
