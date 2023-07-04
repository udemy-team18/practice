import { useState } from "react";
import { increment, decrement } from "../src/redux/counterSlice";
import { handleClick } from "../src/redux/authSlice";
import { addTodo } from "../src/redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.CounterSlice.count);
  const auth = useSelector((state) => state.AuthSlice.auth);
  const todos = useSelector((state) => state.TodoSlice.todos);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* counterSlice */}
      <h1>
        카운터 : <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>

      {/* authSlice */}
      <p>{auth ? "로그인되지 않았습니다" : "로그인 되었습니다"}</p>
      <button onClick={() => dispatch(handleClick())}>
        {auth ? "로그인" : "로그아웃"}
      </button>

      {/* todoSlice */}
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch(addTodo())}>추가하기</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
