import { useEffect } from "react";
import Chat from "./chat";

function App() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    backgroundColor: "darkslategrey",
    color: "aliceblue",
    height: "5000px",
  };

  return (
    <div className="App" style={style}>
      <h1>live chat</h1>
      <Chat />
    </div>
  );
}

export default App;
