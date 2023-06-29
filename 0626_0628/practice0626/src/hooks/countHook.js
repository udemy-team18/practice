import { useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
}

export default useCounter;
