import React from "react";
import "./home.css";
import Intro from "../components/intro/Intro";
import Topbar from "../components/topbar/Topbar";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

function HomePage() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="section">
        <div className="c2">
          <Intro></Intro>
        </div>
        <div className="c3">
          <Portfolio></Portfolio>
        </div>
        <div className="c4">
          <Contact></Contact>
        </div>
        <div className="c2">
          <About></About>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
