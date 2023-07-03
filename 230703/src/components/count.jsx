import React, { useState } from "react";

export default function Count() {
  const [counter, setCounter] = useState(0);
  const countUp = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>count up</h1>
      <h2>{counter}</h2>
      <button onClick={countUp}>count up</button>
    </div>
  );
}
