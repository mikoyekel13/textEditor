import Letter from "./Letter";
import StyleButton from "./StyleButtons"
function KeyBoard(props) {
  const letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  function typeChar(char) {
    props.text((prev) => `${prev}${char}`);
  }

  return (
    <div>
      {letters.split(",").map((letter, index) => (
        <Letter char={letter} key={index} onClick={() => typeChar(letter)} />
        
      ))}
    </div>
  );
}
export default KeyBoard;
      {/* <button onClick={changeColorText}>Change Color Text</button> */}
      //   function changeColorText(){
    
//   }
