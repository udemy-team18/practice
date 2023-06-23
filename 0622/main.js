//배경
function backImg() {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const backgroundImg = document.querySelector(".backgroundImg");
  const bgImage = document.createElement("img");
  bgImage.src = `images/${chosenImage}`;
  backgroundImg.appendChild(bgImage);
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

//Todo List
function todo() {
  const todoList = document.getElementById("todoList");
  const todoInput = document.getElementById("todo"); //todo 입력 필드

  // Todo List 불러오기
  if (localStorage.getItem("todos")) {
    todoList.innerHTML = localStorage.getItem("todos");
  }

  // Enter 키 입력 시 todo 추가
  todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const todo = todoInput.value;
      if (todo) addTodoList(todo);
      todoInput.value = ""; //todo 입력 필드 비우기
    }
  });

  function addTodoList(todo) {
    const liTag = document.createElement("li");
    const checkboxTag = document.createElement("input");
    const labelTag = document.createElement("label");
    const deleteButtonTag = document.createElement("button");

    checkboxTag.type = "checkbox"; //체크박스 타입으로 설정
    checkboxTag.addEventListener("change", () => {
      if (checkboxTag.checked) {
        labelTag.style.textDecoration = "line-through"; //체크 시 텍스트 줄 그리기
      } else {
        labelTag.style.textDecoration = "none"; //체크 해제 시 텍스트 줄 제거
      }
    });

    labelTag.textContent = todo;
    deleteButtonTag.textContent = "delete";
    deleteButtonTag.addEventListener("click", () => {
      liTag.remove();
      saveTodoList(); // Todo List 저장
    });

    liTag.appendChild(checkboxTag);
    liTag.appendChild(labelTag);
    liTag.appendChild(deleteButtonTag);
    todoList.appendChild(liTag);
    saveTodoList(); // Todo List 저장
  }

  function saveTodoList() {
    localStorage.setItem("todos", todoList.innerHTML);
  }
}
todo();

//날씨
import API_KEY from "./api.js";
function weathers() {
  console.log(API_KEY);

  const city = document.querySelector(".city");
  const temp = document.querySelector(".temperature");
  const weather = document.querySelector(".weather");
  const iconSection = document.querySelector(".icon");

  const callbackOk = (position) => {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const lang = "en"; //언어
    const units = "metric"; //섭씨
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(lat, lon);
        console.log(data.main.temp);
        const temperature = Math.round(data.main.temp);
        // const temperature = data.main.temp ? Math.round(data.main.temp) : "no";
        const weathers = data.weather[data.weather.length - 1];
        const icon = data.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        city.innerText = data.name;
        temp.innerHTML = `${temperature}&#176;C`;
        weather.innerHTML = `${weathers.main}`;
        iconSection.setAttribute("src", iconURL);
      });
  };

  const callbackError = () => {
    alert("위치정보를 찾을 수 없습니다.");
  };

  navigator.geolocation.getCurrentPosition(callbackOk, callbackError); //현재 위치
}
weathers();
