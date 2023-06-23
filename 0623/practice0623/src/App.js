import Todo from "./components/TodoList";
import Random from "./components/Random";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Todo />
      <Random min={1} max={100} />
      <Slider />
    </>
  );
}

export default App;
