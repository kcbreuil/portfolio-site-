import React from "react";
import quaranred from "../assets/quaranred.mov";
import fm3 from "../assets/fm3.mov";
import netapp from "../assets/NetApp.mov"
import chatroom from "../assets/chatroom.mov"
import pizza from '../assets/pizza.png';
import moodsic from '../assets/moodsic.png'
import calc from '../assets/Calc.png';

import "../styling/portfolio.css";

const Projects = () => {
  return (
    <div>
      <div className="portfolio-flex">
      <div className="project-div">
          <h1 className="project-name">QuaranRead</h1>
          <video src={quaranred} width="420" height="340" controls></video>
          <p>An application created using ReactJS, Express, Node.js and Google books API integration.</p>
          <a href="https://quaranread2020.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          <br></br>
          <a href="https://github.com/kcbreuil/quaranread" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
        <div className="project-div">
          <h1 className="project-name">The Market</h1>
          <video src={fm3} width="420" height="340" controls></video>
          <p>Concept was selected among ten peer pitches and was developed over a two-week sprint using ReactJS, MongoDB, Express and Node.js.</p>
          <a href="https://the-market2020.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          <br></br>
          <a href="https://github.com/kcbreuil/farmers_market" target="_blank" rel="noopener noreferrer">
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
          <br></br>
          <a href="https://whispering-garden-42678.herokuapp.com/">Live Site</a>
        </div>
        <div className="project-div">
          <h1 className="project-name">Pizza Pizza</h1>
          <img src={pizza} width="420" height="340" alt="project"/>   
          <p>A Gatsby site developed with styled-components, Sanity headless CMS, and Netlify functions </p>
          <a href="https://github.com/kcbreuil/pizza-pizza">Source Code</a>
          <br></br>
          <a href="https://pizza-pizzaa.netlify.app/">Live Site</a>
        </div>
        <div className="project-div">
          <h1 className="project-name">Mortgage Calculator</h1>
          <img src={calc} width="420" height="340"  alt="project"/>   
          <p>A simple web app built with good ol' Vanilla JS. Deployed with Dokku on my personal Digital Ocean server</p>
          <a href="https://github.com/kcbreuil/mortgage-calculator">Source Code</a>
          <br></br>
          <a href="https://mortgage-calculator.kaitlynbreuil.com/">Live Site</a>
        </div>
        <div className="project-div">
          <h1 className="project-name">Moodsic</h1>
          <img src={moodsic} width="420" height="340"  alt="project"/>   
          <p>A fullstack web application built with React, Node.JS, Express and MongoDB</p>
          <a href="https://github.com/kcbreuil/moodsic">Source Code</a>
          <br></br>
          <a href="https://blooming-earth-54312.herokuapp.com/">Live Site</a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
