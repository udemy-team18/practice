import Count from "./components/count";
import Counter from "./components/count_reducer";
import Todo from "./components/todo_reducer";

function App() {
  return (
    <div className="App">
      <Count />
      <hr />
      <Counter />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
