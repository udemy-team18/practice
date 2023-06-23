import React, { useState } from "react";

const WriteTodo = (props) => {
  console.log(props);
  const todoList = props.todoList;
  return (
    <ul>
      {todoList.map((item) => (
        <li>
          {item.id} {item.text}
        </li>
      ))}
    </ul>
  );
};

const Todo = () => {
  const arr = new Array(10);
  const [todoList, setTodoList] = useState({ arr });
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
