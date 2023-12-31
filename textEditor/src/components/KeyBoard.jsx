import Letter from "./Letter";
function KeyBoard(props) {

  let letters;
  switch (props.lang) {
    case "engLC":
      letters =
        "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,<,>,?,!,-,+,*,/";
      break;
    case "engUC":
      letters =
        "1,2,3,4,5,6,7,8,9,0,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,<,>,?,!,-,+,*,/";
      break;
    case "heb":
      letters =
        "1,2,3,4,5,6,7,8,9,0,<,>,ק,ר,א,ט,ו,ן,ם,פ,ש,ד,ג,כ,ע,י,ח,ל,ך,ף,ז,ס,ב,ה,נ,מ,צ,ת,ץ,?,!,+,*,/";
      break;
  }

  function deleteChar() {
    props.undo((prev) => [...prev, props.firstText]);
    props.text((prev) => [...prev.slice(0, prev.length - 1)]);
  }
  function deleteAll() {
    props.undo((prev) => [...prev, props.firstText]);
    props.text([]);
  }
  function typeChar(char, style) {
    props.undo((prev) => [...prev, props.firstText]);
    props.text((prev) => [...prev, { char: char, style: style }]);
  }

  return (
    <div id="keyboard">
      {letters.split(",").map((letter, index) => (
        <Letter
          char={letter}
          key={index}
          onClick={() => typeChar(letter, { ...props.currStyle })}
        />
      ))}

      <button
        type="button"
        className="keyboardBtn"
        id="deleteLastBtn"
        onClick={deleteChar}
      >
        Delete Last
      </button>
      <button
        type="button"
        className="keyboardBtn"
        id="deleteAllBtn"
        onClick={deleteAll}
      >
        Delete All
      </button>
      <button
        type="button"
        className="keyboardBtn"
        id="spaceBtn"
        onClick={() => typeChar(" ")}
      >
        Space
      </button>
      <button
        type="button"
        className="keyboardBtn"
        id="enterBtn"
        onClick={() => typeChar("\n")}
      >
        Enter
      </button>
      <button
        type="button"
        className="keyboardBtn"
        id="undoBtn"
        onClick={() => {
          props.undo((prev) => [...prev.slice(0, prev.length - 1)]);
          props.text(props.lastText[props.lastText.length - 1])}}
      >
        Undo
      </button>
    </div>
  );
}
export default KeyBoard;
{
  /* <button onClick={changeColorText}>Change Color Text</button> */
}
//   function changeColorText(){

//   }
