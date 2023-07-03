import React, { useReducer } from "react";

const initialState = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // dispatch = 액션을 발생 시키는 함수
  return (
    <div>
      <h1>counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Increase" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrease" });
        }}
      >
        reduce
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}
