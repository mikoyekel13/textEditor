import '../App.css';
function Letter(props) {
  return (
    <button className="letterButton" onClick={props.onClick}>
      {props.char}
    </button>
  );
}

export default Letter;
