import React from "react";

const Header = () => {
  const myFunction = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#news">Projects</a>
      <a href="#contact">Contact</a>
      <a href="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Header;
