import { increment, decrement } from "../src/redux/counterSlice";
import { handleClick } from "../src/redux/authSlice";
import { addTodo, toggleTodo } from "../src/redux/todosSlice";
import { addToCart, removeFromCart } from "../src/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.CounterSlice.count);
  const auth = useSelector((state) => state.AuthSlice.auth);
  const todos = useSelector((state) => state.TodosSlice.todos);
  const cartItems = useSelector((state) => state.CartSlice.cart);

  //todo
  const handleAddTodo = (text) => {
    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );
    document.getElementById("todoInput").value = "";
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  //cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ CartItem: cartItems, id: itemId }));
  };

  return (
    <div className="App">
      {/* counterSlice */}
      <div>
        <h1>
          카운터 : <span>{count}</span>
        </h1>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
      </div>

      {/* authSlice */}
      <div>
        <p>{auth ? "로그인되지 않았습니다" : "로그인 되었습니다"}</p>
        <button onClick={() => dispatch(handleClick())}>
          {auth ? "로그인" : "로그아웃"}
        </button>
      </div>

      {/* todo */}
      <div>
        <h1>할 일 목록</h1>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <input type="text" id="todoInput" />
        <button
          onClick={() =>
            handleAddTodo(document.getElementById("todoInput").value)
          }
        >
          추가하기
        </button>
      </div>

      {/* cart */}
      <div>
        <h1>쇼핑 카트</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}원
              <button onClick={() => handleRemoveFromCart(index)}>제거</button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleAddToCart({ name: "상품 1", price: 10000 })}
        >
          상품 1 추가
        </button>
        <button
          onClick={() => handleAddToCart({ name: "상품 2", price: 20000 })}
        >
          상품 2 추가
        </button>
      </div>
    </div>
  );
}

export default App;
