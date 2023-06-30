import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  });

  const handleMessage = (message) => {
    setMessage((prev) => [...prev, message]);
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        name: username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>실시간 채팅</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="사용자 이름 입력하세요"
      />
      <h1>채팅</h1>
      <div>
        {message.map((message, index) => (
          <p key={index}>
            {message.name} : {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessageSubmit}>전송</button>
    </div>
  );
}
export default Chat;
