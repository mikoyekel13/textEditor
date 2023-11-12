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
        "1,2,3,4,5,6,7,8,9,0,<,>,ק,ר,א,ט,ו,ן,ם,פ,ש,ד,ג,כ,ע,י,ח,ל,ך,ף,ז,ס,ב,ה,נ,מ,צ,ת,ץ,?,!,-,+,*,/";
      break;
  }
  function typeChar(char, style) {
    props.text((prev) => [...prev, { char: char, style: style }]);
  }
  function deleteChar() {
    props.text((prev) => [...prev.slice(0, prev.length - 1)]);
  }
  function deleteAll() {
    props.text([]);
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
        id="spaceBtn"
        onClick={() => typeChar(" ")}
      >
        Space
      </button>
      <button
        type="button"
        className="keyboardBtn"
        id="deleteAllBtn"
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
    </div>
  );
}
export default KeyBoard;
{
  /* <button onClick={changeColorText}>Change Color Text</button> */
}
//   function changeColorText(){

//   }
