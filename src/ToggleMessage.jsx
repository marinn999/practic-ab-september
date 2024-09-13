import React, { useState } from "react";

const ToggleMessage = () => {
  const [text, setText] = useState(true);
  const handleClick = () => {
    setText(!text);
  };
  return (
    <div>
      <h1>{text ? "OOOHHH YEAAAH" : "Nooo wayyy"}</h1>
      <button onClick={handleClick}>Change text</button>
    </div>
  );
};

export default ToggleMessage;
