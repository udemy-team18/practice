//배경
function backImg() {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");

  bgImage.src = `images/${chosenImage}`;

  document.body.appendChild(bgImage);
}
backImg();

// 시계
function getClock() {
  const time = document.getElementById("time");
  const date = new Date();
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  let time_now = hours + ":" + minutes + ":" + seconds;

  time.innerHTML = time_now;
}
setInterval(getClock, 1000);

//인사
function greet() {
  const inputName = document.querySelector("#input-name");
  const loginInput = inputName.querySelector("input");
  const greeting = document.querySelector("#greeting");
  const ellipsisForm = document.querySelector("#ellipsis-form");
  const ellipsis = ellipsisForm.querySelector("input");
  const renameBtn = document.querySelector("#renameBtn");
  const savedUserName = localStorage.getItem("username");

  // localStorage username 검사
  if (savedUserName === null) {
    inputName.classList.remove("hidden");
    inputName.addEventListener("submit", logInSubmit);
  } else {
    greetings(savedUserName);
  }

  function logInSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    inputName.classList.add("hidden");
    greetings(username);
  }

  // 시간별 인사
  function greetings(username) {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      greeting.innerText = `Good morning, ${username}`;
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting.innerText = `Good afternoon, ${username}`;
    } else if (currentHour >= 17 && currentHour < 20) {
      greeting.innerText = `Good evening, ${username}`;
    } else {
      greeting.innerText = `Good night, ${username}`;
    }
    greeting.classList.remove("hidden");
    ellipsisForm.classList.remove("hidden");
    ellipsis.addEventListener("click", showModifyUsername);
    renameBtn.addEventListener("submit", modifyUsername);
  }

  function showModifyUsername(event) {
    renameBtn.classList.toggle("hidden");
  }

  // 이름 수정
  function modifyUsername(event) {
    event.preventDefault();
    greeting.classList.add("hidden");
    ellipsisForm.classList.add("hidden");
    renameBtn.classList.add("hidden");
    inputName.classList.remove("hidden");
    inputName.addEventListener("submit", logInSubmit);
  }
}
greet();
