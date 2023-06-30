//0626수업
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import SearchResults from "./pages/SearchResults";

// function App() {
//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/profiles/:username" element={<Profile />} />
//         <Route path="/search" element={<SearchResults />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

//0628수업
// import Counter from "./components/counter";
// import LoginForm from "./components/loginForm";
// import UseCount from "./components/usecount";

// function App() {
//   return (
//     <div className="App">
//       {/* <Counter />
//       <UseCount /> */}
//       <LoginForm />
//     </div>
//   );
// }

// export default App;

//0630
import Timer from "components/timer";
import Counter from "./components/count";
import Reducer from "components/countReducer";
import ToggleTheme from "components/toggleTheme";
function App() {
  return (
    <div>
      <h1>components lifecycle 이해</h1>
      <Counter />
      <Timer />
      <Reducer />
      <ToggleTheme />
    </div>
  );
}

export default App;
