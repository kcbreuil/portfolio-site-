import React from "react";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import SideNav from "./components/SideNav.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SideNav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
