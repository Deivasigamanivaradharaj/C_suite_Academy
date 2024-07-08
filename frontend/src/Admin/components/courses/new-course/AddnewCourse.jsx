import React from "react";
import NewCourse from "./NewCourse";
import Sidebar from "../../sidebar/LeftBar";

const AddnewCourse = () => {
  return (
    <div className="courses-page-1">
      <Sidebar />
      <NewCourse />
    </div>
  );
};

export default AddnewCourse;
