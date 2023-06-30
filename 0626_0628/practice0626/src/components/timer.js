import React, { useState, useEffect } from "react";

export default function Timer() {
  //타이머
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("리턴됨");
      clearInterval(timer);
    };
  }, []);

  //타이머 숨기기
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && <p>초 : {seconds}</p>}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
    </div>
  );
}
