import React, { useReducer } from "react";

//숫자 카운트
const initial = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initial;
    default:
      return;
  }
};

//toggle
const initialState = { theme: "light" };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle_theme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initial);
  const [state, dispatch1] = useReducer(themeReducer, initialState);

  return (
    <div>
      <h1>숫자세기</h1>
      <p>값 : {count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <p>테마 색상 :{state.theme}</p>
      <button onClick={() => dispatch1({ type: "toggle_theme" })}>
        색 변경
      </button>
    </div>
  );
};

export default Reducer;
