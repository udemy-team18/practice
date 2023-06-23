import React, { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>{count}</p>;
}

export default Timer;
