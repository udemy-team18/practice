import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("clean up completed");
    };
  }, []);
  return <p>{count}</p>;
}

function Practice06() {
  return <Timer />;
}

export default Practice06;
