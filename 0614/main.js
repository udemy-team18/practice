const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
const login = document.querySelector(".navbar-login");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  login.classList.toggle("active");
});
