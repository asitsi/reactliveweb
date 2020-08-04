import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Banner = () => {
  return (
    <>
      <div className="request_block">
        <div className="request_block_container">
          <h1>Request tutors</h1>
          <p>
            Post your learning requirement and let interested tutors contact
            you.
          </p>
          <br />
          <NavLink
            to="/SignupstudentMain"
            className="Request_block_navlink  d-sm-none  d-md-inline d-lg-inline"
          >
            Request tutor
            <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
          </NavLink>
          <NavLink
            to="/SignupstudentMain"
            className="Request_block_navlink_small d-block d-sm-block d-md-none d-lg-none"
          >
            Request tutor
            <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
          </NavLink>
        </div>
        <div className="request_block_container2">
          <h1>Teach what you love</h1>
          <p>
            Join hundreds of other professionals who earn doing what they love.
          </p>
          <br />
          <NavLink
            to="/MainForm"
            className="Request_block_navlink d-sm-none d-md-inline d-lg-inline"
          >
            Become a tutor
            <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
          </NavLink>
          <NavLink
            to="//MainForm"
            className="Request_block_navlink_small d-block d-sm-block d-md-none d-lg-none"
          >
            Become a tutor
            <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Banner;
