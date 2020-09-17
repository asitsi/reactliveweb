import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import Selectcity from "../src/Navbar/Selectcity";
import image from "../src/image/logo.png";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";

const Menu = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`nav_bg ${show && "nav_bg_white"}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              <img src={image} alt="logo" className="brand_name" />
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
              <span>
                <FormatAlignRightIcon className="navbar-toggler-icon hanburger_icone" />
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/"
                  >
                    Aboutus
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink
                      exact
                      className="dropdown-item courses_dropdown"
                      to="/home"
                    >
                      NTA UGC NET
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink exact className="dropdown-item" to="/home">
                      +2 COURSE
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink exact className="dropdown-item" to="/home">
                      CTET
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink exact className="dropdown-item" to="/home">
                      More
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown"></li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    Faculty
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    FAQ's
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    Enquiry
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/SignupstudentMain"
                  >
                    Feedback
                  </NavLink>
                </li>
              </ul>
              <div className="my-2 my-lg-0 d-flex ">
                <div className="signin_btn">
                  <NavLink exact to="/Signin" className="Signin_nav">
                    Sign in
                  </NavLink>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="signout_btn"
                    id="dropdownMenuOffset"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-offset="10,20"
                  >
                    Signup
                  </button>
                  <div
                    className="dropdown-menu signout_btn_div"
                    aria-labelledby="dropdownMenuOffset"
                  >
                    <NavLink
                      className="dropdown-item signout_btn_div_Navlink"
                      to="/MainForm"
                    ></NavLink>
                    <NavLink
                      className="dropdown-item signout_btn_div_Navlink"
                      to="/SignupstudentMain"
                    ></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
