<<<<<<< HEAD
import Letter from "./Letter";

function KeyBoard() {
  const letters = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  return (
    <div>
      {letters.map((letter, index) => (
        <Letter char={letter} />
      ))}
    </div>
  );
}

export default KeyBoard;
=======
import Letter from "./Letter"
function KeyBoard(){
    const letters='abcdefghijklmnopqrstuvwxyz';
    return <div>
        {letters.map((letter,index)=>
        (
            <Letter char={letter}/>
        )
        )}
    </div>
}
export default KeyBoard;
>>>>>>> c02b7b613a0b51d4cb85d3e6f1b7bba54d8124e0
