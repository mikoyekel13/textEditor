function LangButtons(props) {
  return (
    <div id="langBtns">
      <button
        type="button"
        className="langBtn"
        onClick={() => props.lang("eng")}
      >
        English
      </button>
      <button
        type="button"
        className="langBtn"
        onClick={() => props.lang("heb")}
      >
        Hebrew
      </button>
    </div>
  );
}

export default LangButtons;
