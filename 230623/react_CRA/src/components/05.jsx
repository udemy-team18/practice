import React from "react";

function ToDoList(props) {
  console.log(props);
  const toDos = props.toDos;
  return (
    <ul>
      {toDos.map((item) => (
        <li>
          {item.id} {item.text}
        </li>
      ))}
    </ul>
  );
}

function Practice05() {
  const toDos = [
    { id: 1, text: "works that have to be done" },
    { id: 2, text: "works that have to be done" },
    { id: 3, text: "works that have to be done" },
    { id: 4, text: "works that have to be done" },
    { id: 5, text: "works that have to be done" },
  ];
  //   const anotherToDos = [
  //     { id: 5, text: "works that have to be done" },
  //     { id: 6, text: "works that have to be done" },
  //     { id: 7, text: "works that have to be done" },
  //     { id: 8, text: "works that have to be done" },
  //     { id: 9, text: "works that have to be done" },
  //   ];
  return <ToDoList toDos={toDos} />;
}

export default Practice05;
