import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const onChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>about</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="여행가고 싶은 지역"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default About;
