import "./style.css";
// import { go } from "./go.js";

const app = document.querySelector("#app");
const btn = document.querySelector("#btn");

// function write() {
//   return (
//     <form action="">
//       <label for="place">where do you wanna go?</label>
//       <input type="text" name="place" id="place" />
//       <input type="submit" value="GO!" id="btn" />
//     </form>
//   );
// }

function go(e) {
  console.log(e);
  e.preventDefault();
  const place_to_go = document.querySelector("#place").value;

  location.href = `https://www.goodchoice.kr/product/result?keyword=${place_to_go}`;
}

// btn.addEventListener("click", (event) => go(event));
btn.addEventListener("click", go);

// ReactDOM.render(<write />, app);
