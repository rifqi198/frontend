import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" id="NavTitle">
          <img src="logoReadIt.png"></img>
        </Link>
      </div>
      <div className="links">
        <Link
          to="/Login"
          className={location.pathname === "/Login" ? "active-link" : ""}
        >
          Contact
        </Link>
        <Link to="/Register" className={location.pathname === "/Register" ? "active-link" : ""}>
          Register
        </Link>
      </div>
    </div>
  );
};
