import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logos/Logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img style={{ width: "100px" }} src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-3">
              <li className="nav-item">
                <NavLink className="nav-link nav_link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/concerns">
                  Concerns
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/event">
                  Event
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav_link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className="btn px-4 btn-primary">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
