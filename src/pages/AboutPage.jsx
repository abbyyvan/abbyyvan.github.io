import React from "react";
import Topbar from "../components/topbar/Topbar";
import About from "../components/about/About";
export default function AboutPage() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="section">
        <About></About>
      </div>
    </div>
  );
}
