import React from "react";
import "../styling/sidenav.css";

const SideNav = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <a href="https://www.linkedin.com/in/kaitlynbreuil/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/kcbreuil">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/KatieBreuil">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/kayseabee/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
