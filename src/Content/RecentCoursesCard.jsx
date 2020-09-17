import React from "react";
import { NavLink } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@material-ui/icons/RemoveRedEyeOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const RecentCoursesCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <NavLink to="/" className="RecentCoursesCard_navlink">
        <div className="RecentCoursesCard_bg">
          <img
            src={props.img}
            alt="img"
            className="RecentCoursesCategory_card_image img_fluid"
          />
          <div>
            <h5 className="RecentCoursesCategory_heading_color">
              {props.title}
            </h5>
            <div className="RecentCoursesCategory_details">
              <div className="RecentCoursesCategory_details_1">
                <RemoveRedEyeOutlinedIcon className="RecentCoursesCategory_details_prop" />
                <span>{props.details1}</span>
              </div>
              <div className="RecentCoursesCategory_details_2">
                <AccessTimeOutlinedIcon className="RecentCoursesCategory_details_prop" />
                <span>{props.details2}</span>
              </div>
              <div className="RecentCoursesCategory_details_3">
                <StarBorderOutlinedIcon className="RecentCoursesCategory_details_prop star" />
                <span>{props.details3}</span>
              </div>
            </div>
            <hr />
            <div className="RecentCoursesCategory_info">
              <div>
                <img
                  src={props.img2}
                  className="RecentCoursesCategory_Avatar_image img_fluid"
                  alt="img"
                />
                <span className="RecentCoursesCategory_info_text">
                  {props.name}
                </span>
              </div>
              <div className="RecentCoursesCategory_demo_btn">
                <NavLink to="/" className="RecentCoursesCategory_demo_btn_nav">
                  <SkipNextOutlinedIcon />
                  <span>{props.demo}</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default RecentCoursesCard;
