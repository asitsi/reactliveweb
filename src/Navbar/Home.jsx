import React from "react";
import { NavLink } from "react-router-dom";
import web1 from "../image/meeting-3.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Trips from "../Content/Trips";
import PopularCategory from "../Content/PopularCategory";
import Container from "../Content/Container";
import Consultancy from "../Content/Consultancy";
import Quiz from "../Content/Quiz/Quiz.js";
// import Blognotification from "../Content/Blognotification";
// import Polloftheday from "../Content/Polloftheday";
// import RecentCoursesCategory from "../Content/RecentCoursesCategory";
// import Banner from "../Content/Banner";
import Testimonial from "../Content/Testimonial";
// import RequestSubmit from "../Content/RequestSubmit";
import NewsLater from "../Content/NewsLater";
import Footer from "../Content/Footer";

const Home = () => {
  return (
    <>
      <div className="Top_header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 header_tittle order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Your New </h1>
              <p>
                Study any topic, anytime. Choose from thousands of expert-led
                courses now.
              </p>
              <NavLink
                className="header_tittle_enrollbtn"
                to="/SignupstudentMain"
              >
                Enroll now
                <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
              </NavLink>
            </div>

            <div className="col-lg-6 col-md-6 col-12 header_img order-1 order-lg-2 ">
              <img src={web1} alt="" className="img-fluid animated" />
            </div>
          </div>
        </div>
      </div>

      <Trips />
      <PopularCategory />
      <Container />
      <Consultancy />
      <Quiz />
      {/* <Blognotification />
      <Polloftheday /> */}
      {/* <RecentCoursesCategory /> */}
      {/* <Banner /> */}
      <Testimonial />
      {/* <RequestSubmit /> */}
      <NewsLater />
      <Footer />
    </>
  );
};

export default Home;
