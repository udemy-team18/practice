import React from 'react';

function NewFile2({ todos }) {
  return (
    <>
      <div>2번째</div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}

export default NewFile2;
