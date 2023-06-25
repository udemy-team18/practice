import React, { useState } from "react";

const WriteTodo = (props) => {
  const todoList = props.todoList;
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Todo = () => {
  const arr = Array.from({ length: 5 }, (v, i) => {
    return i;
  });
  const [todoList, setTodoList] = useState(arr);
  return (
    <div>
      <h1>todo list</h1>
      <form onSubmit={undefined}>
        <label htmlFor="todo">insert jobs to be done</label>
        <input type="text" id="todo" value={undefined} />
        <button type="submit">add</button>
      </form>
      <WriteTodo todoList={todoList} />
    </div>
  );
};

export default Todo;
