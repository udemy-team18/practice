import React, { useState } from "react";

function Greeting({ name }) {
  return <h1>hi! {name}</h1>;
}

function Practice02() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <Greeting name="yunie" />
    </>
  );
}

export default Practice02;
