import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
const Footer = () => {
  return (
    <>
      <div className="footer_area bg-primary text-white">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-5 col-sm-6 col-12 mb-5">
              <p className="mb-0">H#340 (4th Floor), Road #24,</p>
              <p className="mb-0">New DOHS, Mohakhali, Dhaka, Bangladesh</p>
              <p className="mb-0">Phone: 018XXXXXXXX</p>
              <p className="mb-0">E-mail: info@company.com</p>
            </div>
            <div className="col-md-2 col-sm-3 col-6 mb-5">
              <h6 className="mb-3">Company</h6>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Site Map
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Support Center
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Terms Conditions
                  </NavLink>
                </li>
                <li className="nav-item mb-1">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Submit Listing
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-3 col-6 mb-5">
              <h6 className="mb-3">Quick Links</h6>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Quick Links
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Rentals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Sales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Terms Conditions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white font-weight-light"
                    to="/"
                  >
                    Our blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-5">
              <h6 className="mb-3">About Us</h6>
              <p>
                We are the top real estate agency in Sydney, with agents
                available to answer any question 24/7.
              </p>
              <div className="social-menu">
                <FontAwesomeIcon
                  className="mr-3"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  icon={["fab", "facebook"]}
                />
                <FontAwesomeIcon
                  className="mr-3"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  icon={["fab", "instagram"]}
                />
                <FontAwesomeIcon
                  className="mr-3"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  icon={["fab", "linkedin"]}
                />
                <FontAwesomeIcon
                  className="mr-3"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  icon={["fab", "youtube"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
