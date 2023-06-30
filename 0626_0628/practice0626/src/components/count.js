import React, { useEffect, useState } from "react";

export default function Counter() {
  //1씩 올라감
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  //text count
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>값 : {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <input value={text} onChange={handleText} />
      <p>text count : {charCount}</p>
      {/* <p>text count : {text.length}</p> */}
    </div>
  );
}
