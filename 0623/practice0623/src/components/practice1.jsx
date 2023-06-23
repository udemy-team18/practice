import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  return <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>;
};

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("cleanup");
    };
  }, [count]);

  return <p>{count}</p>;
}

function Practice01() {
  return (
    <>
      <h1>haha</h1>
      <Toggle />
      <Timer />
    </>
  );
}

export default Practice01;
