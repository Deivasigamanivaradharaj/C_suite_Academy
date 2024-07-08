import React from "react";
import js from "../Assets/Images/imagenotxt.png";

const CourseRecommendation = ({ title, description }) => {
  return (
    <div
      style={{
        height: "250px",
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#f3e6ff",
        boxShadow: "0px 4px 6px #d2b2ff",
        border: "1px solid #a86aff84",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="my-2"
      >
        <img
          src={js}
          style={{
            height: "150px",
            width: "100%",
            objectFit: "contain",
            borderRadius: "15px",
          }}
          alt="thumbnail"
        />
      </div>
      <div className="px-4">
        <h1 style={{ fontSize: "15px" }}>{title}</h1>
        <p
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: "10px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CourseRecommendation;
