import React from "react";
import CourseCard from "./CourseCard";
import courseList from "../Assets/Data/courseList.json";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();
  return (
    <div className="course-list-cnt">
      <div className="course-list-header">
        <h1>Course List</h1>
        <div className="add-course-btn" onClick={() => navigate("Courses/new")}>
          <h3 style={{fontSize:"1.17em"}} className="top-btn-text">New Course</h3>
        </div>
      </div>
      <div className="course-list">
        {courseList.map((course, index) => (
          <CourseCard data={course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
