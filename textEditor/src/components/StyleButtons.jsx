function StyleButton(props) {
  function changeTextColor(e) {
    props.textStyle(function (prev) {
      const newStyle = { ...prev };
      newStyle.color = `${e.target.value}`;
      return newStyle;
    });
  }
  function changeTextFont() {
    props.textStyle((prev) => {
      const newStyle = { ...prev };
      const Fonts = ["monospace", "Gill Sans MT", "Trebuchet MS"];
      let random = Math.floor(Math.random() * Fonts.length);
      newStyle.fontFamily = Fonts[random];
      console.log(newStyle);
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
  function changeTextAlign(direction) {
    props.textAlign(function (prev) {
      const newStyle = { ...prev };
      newStyle.textAlign = direction;
      return newStyle;
    });
  }

  return (
    <div id="styleBtns">
      <input
        id="colorBtn"
        className="button"
        onChange={changeTextColor}
        type="color"
      ></input>
      <button id="fontBtn" className="button" onClick={changeTextFont}>
        change Font
      </button>
      <input
        id="sizeBtn"
        className="button"
        type="number"
        onChange={changeFontSize}
        placeholder="font size"
      ></input>
      <div id="alignDiv">
        <button onClick={() => changeTextAlign("left")} className="alignBtn">
          left
        </button>
        <button onClick={() => changeTextAlign("center")} className="alignBtn">
          center
        </button>
        <button onClick={() => changeTextAlign("right")} className="alignBtn">
          right
        </button>
      </div>
      <button
        id="changeAllTextStyle"
        onClick={() => {
          props.text(function (prev) {
            let arr = [...prev];
            return arr.map(function (item) {
              item.style = props.currStyle;
              return item;
            });
          });
        }}
      >
        change all
      </button>
      <button
        id="changeAllTextStyle"
        onClick={() => {
          props.undo((prev) => [...prev, props.firstText]);
          props.text(function (prev) {
            let arr = [...prev];
            return arr.map(function (item) {
              item.style = {
                whiteSpace: "pre-wrap",
                color: "black",
                fontFamily: "Cantarell",
                fontSize: "20px",
              };
              return item;
            });
          });
        }}
      >
        reset all
      </button>
    </div>
  );
}
export default StyleButton;
