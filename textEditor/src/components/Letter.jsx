import React, { useState } from "react";

function Letter(props) {
  return (
    <button
      className="letterButton"
      id={`${props.char}-Char`}
      onClick={props.onClick}
    >
      {props.char}
    </button>
  );
  e;
}

export default Letter;
