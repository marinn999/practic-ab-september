import React, { useState } from "react";

const Counter2 = () => {
  const [numb, setNumb] = useState(0);
  const handlePlus = () => {
    setNumb(numb + 1);
  };
  const handleMinus = () => {
    setNumb(numb - 1);
  };
  const handleReset = () => {
    setNumb(0);
  };
  if (numb < 0) {
    alert("TOO LOW NUMBER");
    setNumb(0);
  }
  return (
    <div>
      <h1>{numb}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default Counter2;
