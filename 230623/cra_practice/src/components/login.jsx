import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  //   function handleUserName(event) {
  //     setUserName(event.target.value);
  //   }
  const handleUserName = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };
  function handleUserPw(e) {
    setUserPw(e.target.value);
    // console.log(userPw);
  }
  function checkUser(e) {
    e.preventDefault();
    if (userName === "admin" && userPw === "password") {
      setIsLogedIn(true);
    }
    // setUserName("");
    // setUserPw("");
  }
  function logOut() {
    setIsLogedIn(false);
    setUserName("");
    setUserPw("");
  }
  if (isLogedIn) {
    return (
      <div>
        <h1>Hello, {userName}!</h1>
        <button onClick={logOut}>log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>log in</h1>
        <form onSubmit={checkUser}>
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            name="userName"
            onChange={handleUserName}
            id="userName"
            value={userName}
          />
          <label htmlFor="userPw">userPw</label>
          <input
            type="password"
            name="userPw"
            onChange={handleUserPw}
            id="userPw"
            value={userPw}
          />
          <button type="submit">log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
