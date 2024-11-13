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
        <div className="c2"></div>
        <div className="c3"></div>
        <div className="c4"></div>
      </div>
    </div>
  );
}

export default HomePage;
