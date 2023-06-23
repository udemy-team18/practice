import React from "react";

function TodoList(props) {
  const todos = props.todos;
  const anotherTodos = props.anotherTodos;
  return (
    <>
      <h1>my todo list</h1>
      <ul>
        {todos.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <h1>another todo list</h1>
      <ul>
        {anotherTodos.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </>
  );
}

function Practice03() {
  const todos = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
  ];

  const anotherTodos = [
    { id: 1, text: "10" },
    { id: 2, text: "20" },
  ];

  return <TodoList todos={todos} anotherTodos={anotherTodos} />;
}

export default Practice03;
