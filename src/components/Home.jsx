import React from "react";
import "../styling/home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <div
        style={{ fontFamily: "Modak", textAlign: "center", fontSize: "90px" }}
        clasName="main"
      >
        hi. i'm katie
      </div>
      <div className="sidebar">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <i class="fa fa-github" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Home;
