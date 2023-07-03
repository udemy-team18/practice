import Count from "./components/count";
import Counter from "./components/count_reducer";
import TodoList from "./components/todo_reducer";

function App() {
  return (
    <div className="App">
      <Count />
      <hr />
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
