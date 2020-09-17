import React from "react";
import Dropdown from "./Dropdown";
import web from "../image/home_tutor.png";

const RequestSubmit = () => {
  return (
    <div className="Home_tutor_request_bg py-md-5 py-3">
      <h2>
        <span>Home Tutoring</span> in your city
      </h2>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={web} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12">
            <div>
              <h1>Your Location</h1>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestSubmit;
