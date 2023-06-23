import { useState } from "react";

function Random(props) {
  const { min, max } = props;
  const [randomNum, setRandomNum] = useState(0);
  const onClick = (randomNum) => {
    setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <>
      <h1>My Random Number</h1>
      <button onClick={onClick}>숫자 생성</button>
      <h1>{randomNum}</h1>
    </>
  );
}

export default Random;
