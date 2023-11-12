import KeyBoard from "./KeyBoard";
function StyleButton(props){
    function changeTextColor(){ 
        props.textStyle(function (prev) {
            const newStyle = {...prev};
            newStyle.color = 'red';
            return newStyle;
        }) }
return (
<div>
<button onClick={changeTextColor}>Red</button>
</div>)
}
export default StyleButton;