import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState); //dispath는 액션 발생시키는 함수

  return (
    <div>
      <h1>숫자 카운트</h1>
      <p>숫자: {count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrease" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
    </div>
  );
}
