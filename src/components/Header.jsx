import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="navbar-li" to="/product"> Product</Link>
      <Link className="navbar-li" to="/service"> Service</Link>
      <Link className="navbar-li" to="/contact"> Contact</Link>
      <Link className="navbar-li" to="/login"> Log in</Link>
      <button>GetAccess</button>
    </div>
  );
};
export default Header;
