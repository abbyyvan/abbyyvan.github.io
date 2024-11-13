import React from "react";
import "./home.css";
import Intro from "../components/intro/Intro";
import Topbar from "../components/topbar/Topbar";

function HomePage() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="section">
        <Intro></Intro>
      </div>
    </div>
  );
}

export default HomePage;
