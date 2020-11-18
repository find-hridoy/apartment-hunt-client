import React from "react";
import logo from "../Images/logos/Logo.png";
import {
  faShoppingBag,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="navbar-brand">
        <img
          className="mt-3"
          style={{ width: "130px" }}
          src={logo}
          alt="logo"
        />
      </NavLink>
      <nav className="flex-column mt-5">
        <NavLink
          className="nav-link nav_links"
          activeClassName="active_nav"
          exact
          to="bookingList"
        >
          <FontAwesomeIcon className="nav_icon" icon={faShoppingBag} />
          Booking List
        </NavLink>
        <NavLink
          className="nav-link nav_links"
          activeClassName="active_nav"
          exact
          to="addRentHouse"
        >
          <FontAwesomeIcon className="nav_icon" icon={faPlus} />
          Add Rent House
        </NavLink>
        <NavLink
          className="nav-link nav_links"
          activeClassName="active_nav"
          exact
          to="/myRent"
        >
          <FontAwesomeIcon className="nav_icon" icon={faHome} />
          My Rent
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
