import KeyBoard from "./KeyBoard";
function StyleButton(props) {
  function changeTextColor(e) {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      newStyle.color = `${e.target.value}`;
      return newStyle;
    });
  }
  function changeTextFont() {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      const Fonts = [
        "Arial",
        "Labster",
        "Quicksand",
        "Didot",
        "Roboto",
        "Garamond",
      ];
      let random = Math.floor(Math.random() * Fonts.length);
      console.log(random);
      newStyle.fontFamily = Fonts[random];
      // newStyle.fontFamily = newStyle.fontFamily === 'Arial' ? 'Cantarell' : 'Arial';
      return newStyle;
    });
  }

  function changeFontSize(e) {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      newStyle.fontSize = `${e.target.value}px`;
      return newStyle;
    });
  }

  return (
    <div>
      <input onChange={changeTextColor} type="color"></input>
      <button onClick={changeTextFont}>change Font</button>
      <input
        type="number"
        onChange={changeFontSize}
        placeholder="font size"
      ></input>

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
