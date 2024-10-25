import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleNumbIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>{number}</h2>

      <button onClick={handleNumbIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
