import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={onClick}>+1</button>
    </>
  );
}
