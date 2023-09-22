import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/auth">
          <li>Signup | Login</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
