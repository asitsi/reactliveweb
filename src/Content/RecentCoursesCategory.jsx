import React from "react";
import RecentCoursesCard from "./RecentCoursesCard";
import RecentCourses from "./RecentCourses.js";

const RecentCoursesCategory = () => {
  return (
    <>
      <div className="RecentCoursesCategory py-md-5 py-3">
        <div className="RecentCoursesCategory_heading">
          <p>Hot & Trending</p>
          <h2>
            <span className="theme_color">Recent</span> Courses By Professional
          </h2>
        </div>

        <div className="container pt-3">
          <div className="row gy-4">
            {RecentCourses.map((val, ind) => {
              return (
                <RecentCoursesCard
                  img={val.img}
                  title={val.title}
                  details1={val.details1}
                  details2={val.details2}
                  details3={val.details3}
                  name={val.name}
                  img2={val.img2}
                  demo={val.demo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentCoursesCategory;
