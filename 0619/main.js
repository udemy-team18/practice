// 장바구니
const fruits_list = document.getElementById("fruits-list");
const apple = document.getElementById("apple");
const banana = document.getElementById("banana");
const buttons = document.querySelectorAll(".button");

function addItem(item, price) {
  const liNode = document.createElement("li");
  liNode.textContent = `${item} - ${price}`;
  fruits_list.appendChild(liNode);
}

// apple.addEventListener("click", () => {
//   addItem("사과", "1000원");
// });
// banana.addEventListener("click", () => {
//   addItem("바나나", "1500원");
// });

//버튼 갯수가 더 늘어나는 경우
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    addItem(productName, productPrice);
  });
});

//실시간 채팅
const page = document.getElementById("chatPage");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const user = document.getElementById("user").value;
  const message = document.getElementById("message").value;
  if (user && message) addMessage(user, message);
});

function addMessage(user, message) {
  const liNode = document.createElement("li");
  const strongNode = document.createElement("strong");
  strongNode.textContent = `${user}: `;
  liNode.appendChild(strongNode);
  liNode.append(message);
  page.appendChild(liNode);
}

//Todo List
const todoList = document.getElementById("todoList");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  const todo = document.getElementById("todo").value;
  if (todo) addTodoList(todo);
});

function addTodoList(todo) {
  const liTag = document.createElement("li");
  const buttonTag = document.createElement("button");
  liTag.textContent = `${todo}`;
  buttonTag.textContent = "삭제";
  buttonTag.addEventListener("click", () => {
    liTag.remove(); // 할일 목록(li) 제거
  });
  liTag.append(buttonTag);
  todoList.appendChild(liTag);
}
