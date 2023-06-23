import React, { useState } from "react";

function Practice02() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Practice02;
