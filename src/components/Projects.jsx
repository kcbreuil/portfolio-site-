import React from "react";
import quaranred from "../assets/quaranred.mov";
import fm3 from "../assets/fm3.mov";
import "../styling/portfolio.css";

const Projects = () => {
  return (
    <div>
      <div className="portfolio-flex">
        <div>
          <h1>QuaranRead</h1>
          <video src={quaranred} width="420" height="340" controls></video>
          <br></br>
          <a href="https://the-market2020.herokuapp.com/">Live Site</a>
          <br></br>
          <a href="https://github.com/wyncode/C37_final_farmers_market">
            Source Code
          </a>
        </div>
        <div>
          <h1>The Market</h1>
          <video src={fm3} width="420" height="340" controls></video>
          <br></br>
          <a href="https://quaranread2020.herokuapp.com/">Live Site</a>
          <br></br>
          <a href="https://github.com/wyncode/C37_midterm_katie_nestor_theo">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
