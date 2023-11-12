import React, { useState } from "react";

function Letter(props) {
  return (
    <button className="letterButton" onClick={props.onClick}>
      {props.char}
    </button>
  );
  e;
}

export default Letter;
