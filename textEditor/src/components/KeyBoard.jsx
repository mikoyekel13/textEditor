import Letter from "./Letter";

function KeyBoard(props) {
  let letters;
  switch (props.lang) {
    case "eng":
      letters =
        "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9";
      break;
    case "heb":
      letters =
        "א,ב,ג,ד,ה,ו,ז,ח,ט,י,כ,ל,מ,נ,ס,ע,פ,צ,ק,ר,ש,ת,0,1,2,3,4,5,6,7,8,9";
      break;
  }
  function typeChar(char) {
    props.text((prev) => prev + char);
  }
  function deleteChar() {
    props.text((prev) => prev.substring(0, prev.length - 1));
  }
  function deleteAll() {
    props.text("");
  }

  return (
    <div>
      {letters.split(",").map((letter, index) => (
        <Letter char={letter} key={index} onClick={() => typeChar(letter)} />
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
