import KeyBoard from "./KeyBoard";
function StyleButton(props) {
  function changeTextColor() {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      {
        newStyle.color === "red"
          ? (newStyle.color = "black")
          : (newStyle.color = "red");
      }
      return newStyle;
    });
  }
  function changeTextFont() {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      const Fonts = ["Futura", "Lato", "Garamond", "Arial"];
      const random = Math.floor(Math.random() * Fonts.length);
      newStyle.fontFamily =
        newStyle.fontFamily === "Arial" ? "Cantarell" : "Arial";
      return newStyle;
    });
  }
  // function changeToUpperCase(){
  //     props.textStyle(prev =>{
  //         const newStyle={...prev}
  //         if(newStyle.text){}
  //         newStyle.text = newStyle.text.toUpperCase();}
  //         return newStyle;
  //     })
  // }
  return (
    <div>
      <button onClick={changeTextColor}>Red</button>
      <button onClick={changeTextFont}>change Font</button>
      {/* <button onClick={changeToUpperCase}>UpperCase</button> */}
    </div>
  );
}
export default StyleButton;
