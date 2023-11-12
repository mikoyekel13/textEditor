import KeyBoard from "./KeyBoard";
function StyleButton(props) {
    function changeTextColor() {
        props.textStyle(function (prev) {
            const newStyle = { ...prev };
            { newStyle.color === 'red' ? newStyle.color = 'black' : newStyle.color = 'red' }
            return newStyle;
        })
    }
    function changeTextFont() {
        props.textStyle(function (prev) {
            const newStyle = { ...prev };
            const Fonts = ['Arial', 'Labster', 'Quicksand','Didot','Roboto','Garamond'];
            let random = Math.floor(Math.random() * Fonts.length);
            console.log(random);
            newStyle.fontFamily = Fonts[random];
            // newStyle.fontFamily = newStyle.fontFamily === 'Arial' ? 'Cantarell' : 'Arial';
            return newStyle;
        })
    }

  function changeToUpperCase() {
    props.textStyle((prev) => {
      const newStyle = { ...prev };

      // Assuming there is a property called 'text' in the style object
      if (newStyle.text) {
        newStyle.text = newStyle.text.toUpperCase();
      }

      return newStyle;
    });
  }
  function changeToFifteen() {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      newStyle.fontSize = newStyle.fontSize === "20px" ? "30px" : "20px";
      return newStyle;
    });
  }
   
  return (
    <div>
      <button onClick={changeTextColor}>Red</button>
      <button onClick={changeTextFont}>change Font</button>
      <button onClick={changeToFifteen}>30px</button>
        
      <button
        id="changeAllTextStyle"
        onClick={() =>
          props.text(function (prev) {
            let arr = [...prev];
            return arr.map(function (item) {
              item.style = props.currStyle;
              return item;
            });
          })
        }
      >
        change all
      </button>
    </div>
  );
}
export default StyleButton;
