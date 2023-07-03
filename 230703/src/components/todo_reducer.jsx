import React, { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      dispatch({ type: "add", payload: newTodo });
      setInput("");
    }
  };
  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };
  return (
    <div>
      <form onSubmit={undefined}>
        <label htmlFor="todo">works to do</label>
        <input
          type="text"
          id="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="write things to do"
        />
        <button onClick={addTodo}>add to do</button>
        <ul>
          {todos.map((todo) => {
            <li key={todos.id}>
              {todos.text}
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>;
          })}
        </ul>
      </form>
    </div>
  );
}
