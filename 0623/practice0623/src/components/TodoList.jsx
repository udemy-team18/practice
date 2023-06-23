import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoContent, setEditingTodoContent] = useState("");
  const onChange = (event) => setTodo(event.target.value);

  //추가
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    setTodos((cur) => [...cur, { id: cur.length, content: todo }]);
    setTodo("");
  };

  //삭제
  const handleTodoDelete = (todoId) => {
    setTodos((cur) => cur.filter((todo) => todo.id !== todoId));
  };

  //수정
  const handleTodoEdit = (todoId, todoContent) => {
    setEditingTodoId(todoId);
    setEditingTodoContent(todoContent);
  };

  const handleEditingTodoChange = (event) => {
    setEditingTodoContent(event.target.value);
  };

  //수정 후 저장
  const handleEditingTodoSubmit = (event, todoId, todoContent) => {
    event.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, content: todoContent };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditingTodoContent("");
  };

  //수정 취소
  const handleEditingTodoCancel = () => {
    setEditingTodoId(null);
    setEditingTodoContent("");
  };

  return (
    <div>
      <h1>My Todo list ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write your to do.."
          value={todo}
          onChange={onChange}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? ( //수정 중이 아닐 때
              <form
                onSubmit={(event) =>
                  handleEditingTodoSubmit(
                    event,
                    editingTodoId,
                    editingTodoContent
                  )
                }
              >
                <input
                  type="text"
                  value={editingTodoContent}
                  onChange={handleEditingTodoChange}
                />
                <button type="submit">저장</button>
                <button type="button" onClick={handleEditingTodoCancel}>
                  취소
                </button>
              </form>
            ) : (
              //수정 중일 때
              <>
                <label>
                  <input type="checkbox" />
                  <span>{todo.content}</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleTodoEdit(todo.id, todo.content)}
                >
                  수정
                </button>
                <button type="button" onClick={() => handleTodoDelete(todo.id)}>
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
