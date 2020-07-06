import React from "react";
import "../styling/sidenav.css";

const SideNav = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <a href="https://www.linkedin.com/in/kaitlynbreuil/">
          <i className="fa fa-linkedin icon-large" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/kcbreuil">
          <i className="fa fa-github icon-large" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/KatieBreuil">
          <i className="fa fa-twitter icon-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/kayseabee/">
          <i className="fa fa-instagram icon-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
