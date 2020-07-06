import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

import { BrowserRouter, Route } from "react-router-dom";
import SideNav from "./components/SideNav.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SideNav />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
