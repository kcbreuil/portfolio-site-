import React from "react";
import quaranred from "../assets/quaranred.mov";
import fm3 from "../assets/fm3.mov";
import netapp from "../assets/NetApp.mov"
import chatroom from "../assets/chatroom.mov"
import "../styling/portfolio.css";

const Projects = () => {
  return (
    <div>
      <div className="portfolio-flex">
      <div className="project-div">
          <h1 className="project-name">QuaranRead</h1>
          <video src={quaranred} width="420" height="340" controls></video>
          <p>An application created using ReactJS, Express, Node.js and Google books API integration.</p>
          <a href="https://the-market2020.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          <br></br>
          <a href="https://github.com/wyncode/C37_final_farmers_market" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
        <div className="project-div">
          <h1 className="project-name">The Market</h1>
          <video src={fm3} width="420" height="340" controls></video>
          <p>Concept was selected among ten peer pitches and was developed over a two-week sprint using ReactJS, MongoDB, Express and Node.js.</p>
          <a href="https://quaranread2020.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          <br></br>
          <a href="https://github.com/wyncode/C37_midterm_katie_nestor_theo" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
        <div className="project-div">
          <h1 className="project-name">ChatRoom.io</h1>
          <video src={chatroom} width="420" height="340" controls></video>
          <p>A chatroom created with web sockets and vanilla JS</p>
          <a href="https://wyn-chatroom-io.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          <br></br>
          <a href="https://github.com/kcbreuil/chatroom-io" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project-div">
          <h1 className="project-name">Trivia Game</h1>
          <video src={netapp} width="420" height="340" controls></video>    
          <p>A trivia game created with ReactJS, MongoDB, Express, Node.JS, SendGrid and third-party API integration for NetApp and Google Cloud Next '20. </p>
          {/* <a href="https://github.com/kcbreuil/chatroom-io">Source Code</a>
          <br></br>
          <a href="https://github.com/kcbreuil/chatroom-io">Live Site</a> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
