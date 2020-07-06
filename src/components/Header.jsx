import React from "react";
import "../styling/header.css";

const Header = () => {
  return (
    <div className="topnav" id="myTopnav">
      <a href="/home" className="active">
        Home
      </a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Header;
