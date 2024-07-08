// src/components/Sidebar.js
import React from "react";
import { Link} from "react-router-dom";
import "./sidebar.css";
import logo from "../Assets/logo.png";

const LeftBar = () => {
  return (
    <div className="sidebar-1">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="/admin" className="menu-item">
          <span>Courses</span>
        </Link>
        

        <Link to="/admin/users" className="menu-item">
          <span>Users</span>
        </Link>
        <Link to="/admin/purchases" className="menu-item">
          <span>Purchases</span>
        </Link>
        <Link to="/" className="menu-item">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;
