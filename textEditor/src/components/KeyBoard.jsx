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