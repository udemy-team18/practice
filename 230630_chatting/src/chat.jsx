import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Chat() {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  });

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMessage = (message) => {
    setMessage((prevMessage) => [...prevMessage, message]);
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        userName,
        content: inputValue,
        time: currTime,
      });
      setInputValue("");
    }
  };

  const prevD = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>chat</h1>
      <div>
        {message.map((message, index) => (
          <p key={index}>
            {message.name} : {message.content} - {message.time}
          </p>
        ))}
      </div>
      <h1>input</h1>
      <form onSubmit={prevD}>
        <input
          type="text"
          value={userName}
          onChange={handleUsernameChange}
          placeholder="insert user name"
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit" onClick={handleMessageSubmit}>
          send
        </button>
      </form>
    </div>
  );
}

export default Chat;
