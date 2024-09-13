import React from "react";
import { useState } from "react";

const TextBtn = () => {
  const [text, setText] = useState("Ask for a call");

  const handleClick = () => {
    setText("We will call u in a few mins");
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default TextBtn;
