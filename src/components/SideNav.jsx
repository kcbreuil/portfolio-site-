import React from "react";
import "../styling/sidenav.css";

const SideNav = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <i className="fa fa-github" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default SideNav;
