function LangButtons(props) {
  return (
    <div id="langBtns">
      <button
        type="button"
        className="langBtn"
        onClick={() => props.lang("engLC")}
      >
        English (lower case)
      </button>
      <button
        type="button"
        className="langBtn"
        onClick={() => props.lang("engUC")}
      >
        English (upper case)
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
