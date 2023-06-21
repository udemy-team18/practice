import "./style.css";
// import { go } from "./go.js";

const btn = document.querySelector("#btn");

function go(e) {
  console.log(e);
  event.preventDefault();
  const place_to_go = document.querySelector("#place").value;

  location.href = `https://www.goodchoice.kr/product/result?keyword=${place_to_go}`;
}

// btn.addEventListener("click", (event) => go(event));
btn.addEventListener("click", go);
