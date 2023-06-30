import React, { useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <p>current theme: {theme ? "white" : "dark"}</p>
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        toggle theme
      </button>
    </div>
  );
};

export default ToggleTheme;
