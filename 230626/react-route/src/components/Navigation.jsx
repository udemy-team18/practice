import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/nav.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
