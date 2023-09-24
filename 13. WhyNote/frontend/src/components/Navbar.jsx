import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>Nikhil Tanwar</li>
        <Link to="/" className={styles.link}>
          <li>
            <h1 className={styles.nav_heading}>StickyNote</h1>
          </li>
        </Link>
        <Link to="/auth" className={styles.link}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
