import React, { useReducer, useState } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload]; //기존 state에 payload(현재 input에 있는 것)추가
    case "Delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    //값이 없는게 아니면
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      dispatch({ type: "Add", payload: newTodo });
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="오늘 할 일"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
