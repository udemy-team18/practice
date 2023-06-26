import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <h1>About</h1>
      <form onSubmit={handleSearch}>
        <p>enter search command : </p>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
      <p>move to other page</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
