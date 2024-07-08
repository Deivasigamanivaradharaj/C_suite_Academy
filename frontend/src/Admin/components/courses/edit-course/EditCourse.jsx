import React from "react";
import Sidebar from "../../sidebar/LeftBar";
import Edit from "./Edit";
import { useLocation } from "react-router-dom";

const EditCourse = () => {
  const data = useLocation().state;
  return (
    <div className="courses-page-1">
      <Sidebar />
      <Edit courseData={data} />
    </div>
  );
};

export default EditCourse;
