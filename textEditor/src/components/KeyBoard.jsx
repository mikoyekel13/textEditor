import Letter from "./Letter"
function KeyBoard(){
    const letters='a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    return <div>
        {letters.split(',').map((letter,index)=>
        (
            <Letter char={letter}/>
        )
        )}
    </div>
}
export default KeyBoard;
