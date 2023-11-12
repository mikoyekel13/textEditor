import Letter from "./Letter"
function keyBoard(){
    const letters=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
    return <div>
        {letters.map((letter,index)=>
        (
            <Letter char={letter}/>
        )
        )}
    </div>
}