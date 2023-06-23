import React, { useState } from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([])
  return (
    <div>
      <h1>todo list</h1>
      <form onSubmit={undefined}>
        <label htmlFor="todo">insert jobs to be done</label>
        <input type="text" id="todo" value={undefined} />
        <button type="submit">add</button>
      </form>
      <ul>
      </ul>
    </div>
  );
};

export default Todo;
