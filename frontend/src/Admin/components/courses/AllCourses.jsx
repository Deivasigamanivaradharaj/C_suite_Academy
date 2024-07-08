import React from "react";
import Sidebar from "../sidebar/LeftBar";
import "./courses.css";
import CourseList from "./CourseList";

const AllCourses = () => {
  return (
    <div className="courses-page-1">
      <Sidebar />
      <CourseList/>
    </div>
  );
};

export default AllCourses;
