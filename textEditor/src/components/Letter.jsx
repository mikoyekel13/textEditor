import React, { useState } from "react";

function Letter(props) {
  return (
    <button
      className="letterButton"
      id={`${props.char}-Char`}
      onClick={props.typeChar}
    >
      {props.char}
    </button>
  );
}

export default Letter;
