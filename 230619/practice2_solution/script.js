const messageForm = document.getElementById("message-form");
const userInput = document.getElementById("user-input");
const messageInput = document.getElementById("message-input");
const chat = document.querySelector(".chat");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = userInput.value;
  const message = messageInput.value;
  if (user && message) {
    sendMessage(user, message);
    userInput.value = "";
    messageInput.value = "";
  }
});

function sendMessage(user, message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");

  const userSpan = document.createElement("span");
  userSpan.classList.add("user");
  userSpan.textContent = user + ":";

  const contentSpan = document.createElement("span");
  contentSpan.classList.add("content");
  contentSpan.textContent = message;

  messageContainer.appendChild(userSpan);
  messageContainer.appendChild(contentSpan);
  chat.appendChild(messageContainer);
}
