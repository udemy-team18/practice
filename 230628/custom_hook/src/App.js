import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import UseCount from "./components/usecount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <UseCount />
      </header>
    </div>
  );
}

export default App;
