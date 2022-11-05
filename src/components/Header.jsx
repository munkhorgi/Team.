import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Header = () => {
  return (
    <div className="navbar">
      <div >
      <Link className="navbar-li" to="/">
        {" "}
        Home
      </Link>
      </div>
      <Link className="navbar-li" to="/service">
        {" "}
        Service
      </Link>
      <Link className="navbar-li" to="/contact">
        {" "}
        Contact
      </Link>
      <Link className="navbar-li" to="/login">
        {" "}
        Log in
      </Link>
      <Link className="navbar-li" to="/products">
        {" "}
        Product
      </Link>
      <button>GetAccess</button>
    </div>
  );
};
export default Header;
